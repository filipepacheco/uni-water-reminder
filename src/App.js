import {Amplify} from 'aws-amplify';
import {Hub} from 'aws-amplify/utils';
import {
    Authenticator,
    Radio,
    RadioGroupField,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import {generateClient} from "aws-amplify/api";
import {listHistories, listReminders, listUniUsers} from "./graphql/queries";
import {fetchUserAttributes} from 'aws-amplify/auth';
import {createHistory, createReminder, createUniUser} from "./graphql/mutations";
import React, {useEffect, useState} from "react";
import {DrinkHistory, MainPage, NewReminder} from "./ui-components";
import {initializeInAppMessaging, syncMessages} from 'aws-amplify/in-app-messaging';
import {withInAppMessaging} from "@aws-amplify/ui-react-notifications";

Amplify.configure(awsExports);
initializeInAppMessaging();

const client = generateClient();

const createUserOnDB = (user) => {
    try {
        const options = {
            query: createUniUser,
            variables: {
                input: {
                    birthdate: user.birthdate,
                    name: user.name,
                    email: user.email,
                    weight: user["custom:weight"]
                }
            }
        }
        console.log('created user')
        return client.graphql(options);
    } catch (error) {
        console.error('Error creating user:', error);
        console.log(options)
        throw error; // Rethrow the error to propagate it further if needed
    }
}


const getUserFromDB = (email) => {
    try {
        return client.graphql({
            query: listUniUsers, variables: {filter: {email: {eq: email}}}
        });
    } catch (error) {
        console.log("Error Get User", error);
        console.log("Error User", email);
    }
}

const getRemindersFromDB = async (user) => {
    try {
        return await client.graphql({
            query: listReminders, variables: {filter: {userID: {eq: user.id}}}
        });
    } catch (error) {
        console.log("Error get reminder", error);

    }
}

const getHistoryFromDB = async (user) => {
    try {
        return await client.graphql({
            query: listHistories, variables: {filter: {userID: {eq: user.id}}}
        });
    } catch (error) {
        console.log("Error get history", error);
    }
}

Hub.listen('auth', async ({payload}) => {
    try {
        if (payload?.event === 'signedIn') {
            const currentUser = await fetchUserAttributes() ?? null;
            if (currentUser) {
                const listUsers = await getUserFromDB(currentUser.email);
                if (listUsers.data.listUniUsers.items.length === 0) {
                    await createUserOnDB(currentUser);
                }
            }
        }

    } catch (e) {
        console.log("Error Auth", e);
    }
});
const SignUpComponents = {
    SignUp: {
        FormFields() {
            return (<>
                <Authenticator.SignUp.FormFields/>
                <TextField label={"Weight"} name={"custom:weight"} type={"number"} defaultValue={null}/>
                <RadioGroupField label="Gender" name="gender" direction="column" size="medium"
                                 defaultValue={null} legend={'Gender'}>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                    <Radio value={null}>Rather not say</Radio>
                </RadioGroupField>
            </>);
        },
    }
};


const myFirstEvent = {name: 'my_event'};

const App = () => {
    return (
        <Authenticator components={SignUpComponents}>
            {({signOut, user}) => <MyMainPage signOut={signOut} user={user}/>}
        </Authenticator>
    );
};

const MyMainPage = ({signOut, user}) => {
    const [currentUser, setCurrentUser] = useState(user);
    const [userFromDb, setUserFromDb] = useState(null);
    const [reminders, setReminders] = useState([]);
    const [histories, setHistories] = useState([]);
    const [consumedAmount, setConsumedAmount] = useState(0); // Declare consumedAmount
    useEffect(() => {
        const fetchData = async () => {
            const currentUser = await fetchUserAttributes();

            if (currentUser) {
                setCurrentUser(currentUser);

                const userFromDb = await getUserFromDB(currentUser.email);
                if (userFromDb)
                    setUserFromDb(userFromDb.data.listUniUsers.items[0]);

                const history = await getHistoryFromDB(currentUser)
                if (history) {
                    setHistories(history.data.listHistories.items);
                }

                const reminders = await getRemindersFromDB(currentUser)
                if (reminders)
                    setReminders(reminders.data.listReminders.items);
            }
        };

        if (currentUser) {
            fetchData();
        }
    }, [user]);

    useEffect(() => {
        syncMessages();
    }, []);

    const recommendedAmount = currentUser["custom:weight"] * 0.03

    const createHistoryDb = async (history) => {
        const options = {
            query: createHistory,
            variables: {
                input: {
                    amount: history.Field0,
                    date: new Date().toISOString(),
                    userID: userFromDb.id,
                }
            }
        }
        await client.graphql(options);

        const updatedHistories = await getHistoryFromDB(currentUser);
        setHistories(updatedHistories.data.listHistories.items);
        setConsumedAmount((prevAmount) => prevAmount + parseFloat(history.Field0));
    }

    const createReminderDb = async (reminder) => {
        const options = {
            query: createReminder,
            variables: {
                input: {
                    periodicity: reminder.Field0,
                    userID: userFromDb.id,
                }
            }
        }
        await client.graphql(options);

        const updatedReminders = await getRemindersFromDB(currentUser);
        setReminders(updatedReminders.data.listReminders.items);
    }

    const calculateConsumedPercentage = () => {
        // Calculate the percentage based on the user's consumed amount and the recommended amount
        const percentage = (consumedAmount / recommendedAmount) * 10;
        return Math.min(100, Math.round(percentage)); // Ensure the result is between 0 and 100
    };

    return (
        <>
            <MainPage frame438={<>
                {user && (<>
                    <h1>Hello {currentUser?.name?.split(' ')[0]}!</h1>
                    <h4>Did you know that you should drink {recommendedAmount}L of water per day?</h4>
                    <h5>You've drank {calculateConsumedPercentage()}% already. How about drinking some water now?</h5>
                    <NewReminder onSubmit={createReminderDb}/>
                    <DrinkHistory onSubmit={createHistoryDb}/>
                    <MyReminders reminders={reminders} setReminders={setReminders}></MyReminders>
                    <MyHistory histories={histories} setHistories={setHistories}></MyHistory>
                </>)}
            </>}/>
            <button onClick={signOut}>Sign out</button>
        </>)
}

const MyReminders = ({reminders}) => {
    return (
        <div>
            <h4>Your Reminders</h4>
            {reminders?.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Total Reminders</TableCell>
                            <TableCell>Periodicity</TableCell>
                        </TableRow>
                    </TableHead>
                    {reminders.map((reminder, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{reminder.periodicity}</TableCell>
                        </TableRow>
                    ))}
                </Table>
            ) : (
                <p>No reminders set.</p>
            )}
        </div>
    );
};


const MyHistory = ({histories}) => {
    return (
        <div>
            <h4>Your Water Drinking History</h4>
            {histories?.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Total Times</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    {histories.map((history, index) => (
                        <TableRow key={history.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                You've drank {history.amount} at {history.date}
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            ) : (
                <p>No water drinking history.</p>
            )}
        </div>
    );
};

export default withInAppMessaging(App)
