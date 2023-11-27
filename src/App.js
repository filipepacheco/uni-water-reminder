import {Amplify} from 'aws-amplify';
import {Hub} from 'aws-amplify/utils';

import {Authenticator, Radio, RadioGroupField} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import {generateClient} from "aws-amplify/api";
import {listHistories, listReminders, listUniUsers} from "./graphql/queries";
import {fetchUserAttributes} from 'aws-amplify/auth';
import {createUniUser} from "./graphql/mutations";
import {useEffect, useState} from "react";

Amplify.configure(awsExports);

const client = generateClient();

const createUserOnDB = async (user) => {
    return client.graphql({
        query: createUniUser, variables: {
            input: {
                birthdate: user.birthdate, email: user.email, gender: user.gender, name: user.name
            }
        }
    })
}

const getUserFromDB = async (user) => {
    return client.graphql({
        query: listUniUsers, variables: {filter: {email: {eq: user.email}}}
    });
}

const getRemindersFromDB = async (user) => {
    return client.graphql({
        query: listReminders, variables: {filter: {userID: {eq: user.id}}}
    });
}

const getHistoryFromDB = async (user) => {
    return client.graphql({
        query: listHistories, variables: {filter: {userID: {eq: user.id}}}
    });
}

Hub.listen('auth', async ({payload}) => {
    if (payload?.event === 'signedIn') {
        const currentUser = await fetchUserAttributes();

        if (getUserFromDB(currentUser)?.data?.listUniUsers?.items?.length === 0) await createUserOnDB(currentUser);
    }
});

const SignUpComponents = {
    SignUp: {
        FormFields() {
            return (<>
                <Authenticator.SignUp.FormFields/>
                <RadioGroupField label="Gender" name="gender" direction="column" size="medium"
                                 defaultValue={null} legend={'Gender'}>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                    <Radio value={null}>Rather not say</Radio>
                </RadioGroupField>
            </>);
        },
    }
}


const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('oi')
        const fetchData = async () => {
            setCurrentUser(await fetchUserAttributes());
        };

        if (user) {
            fetchData();
        }
    }, [user]);

    return (
        <Authenticator components={SignUpComponents}>
            {({signOut, user}) => {
                setUser(user); // Update the 'user' state when it changes
                return (
                    <main>
                        {currentUser && <h1>Hello {currentUser.name.split(' ')[0]}!</h1>}
                        <button onClick={signOut}>Sign out</button>
                        <MyReminders user={currentUser}></MyReminders>
                        <MyHistory user={currentUser}></MyHistory>
                    </main>
                )
            }}
        </Authenticator>
    );
};

const MyReminders = (currentUser) => {
    const [reminders, setReminders] = useState(null);
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        const fetchData = async () => {
            const reminders = await getRemindersFromDB(currentUser)
            setReminders(reminders.data.listReminders.items);
        };

        if (currentUser) {
            fetchData();
        }
    }, [user]);

    return (
        <div>
            <h4>You've got {reminders.length} reminder(s)!</h4>
            {reminders && reminders.map((reminder) => {
                return (
                    <>
                        <list>
                            <li>{reminder.periodicity}</li>
                        </list>
                    </>
                )
            })}
        </div>
    )
}

const MyHistory = (currentUser) => {
    const [histories, setHistory] = useState(null);
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        const fetchData = async () => {
            const history = await getHistoryFromDB(currentUser)
            setHistory(history.data.listHistories.items);
        };

        if (currentUser) {
            fetchData();
        }
    }, [user]);


    return (
        <div>
            <h4>You've drank water {histories.length} time(s)!</h4>
            {histories && histories.map((history) => {
                return (
                    <>
                        <list>
                            <li>{history.date}</li>
                        </list>
                    </>
                )
            })}
        </div>
    )
}

export default App
