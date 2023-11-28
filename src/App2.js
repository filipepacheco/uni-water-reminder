// import {Amplify} from 'aws-amplify';
// import {Hub} from 'aws-amplify/utils';
//
// import {Authenticator, Radio, RadioGroupField, useAuthenticator} from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import awsExports from "./aws-exports";
// import {generateClient} from "aws-amplify/api";
// import {listHistories, listReminders, listUniUsers} from "./graphql/queries";
// import {fetchUserAttributes, signIn, signOut} from 'aws-amplify/auth';
// import {createUniUser} from "./graphql/mutations";
// import {useEffect, useState} from "react";
// import {Login, LoginPage} from "./ui-components";
//
// Amplify.configure(awsExports);
//
// const client = generateClient();
//
// const createUserOnDB = async (user) => {
//     try {
//         return await client.graphql({
//             query: createUniUser, variables: {
//                 input: {
//                     birthdate: user.birthdate, email: user.email, gender: user.gender, name: user.name
//                 }
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// const getUserFromDB = async (user) => {
//     try {
//         return await client.graphql({
//             query: listUniUsers, variables: {filter: {email: {eq: user.email}}}
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// const getRemindersFromDB = async (user) => {
//     try {
//         return await client.graphql({
//             query: listReminders, variables: {filter: {userID: {eq: user.id}}}
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// const getHistoryFromDB = async (user) => {
//     try {
//         return await client.graphql({
//             query: listHistories, variables: {filter: {userID: {eq: user.id}}}
//         });
//
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// Hub.listen('auth', async ({payload}) => {
//     if (payload?.event === 'signedIn') {
//         const currentUser = await fetchUserAttributes();
//         if (getUserFromDB(currentUser)?.data?.listUniUsers?.items?.length === 0) await createUserOnDB(currentUser);
//     }
// });
//
// const SignUpComponents = {
//     SignUp: {
//         FormFields() {
//             return (<>
//                 <Authenticator.SignUp.FormFields/>
//                 <RadioGroupField label="Gender" name="gender" direction="column" size="medium"
//                                  defaultValue={null} legend={'Gender'}>
//                     <Radio value="MALE">Male</Radio>
//                     <Radio value="FEMALE">Female</Radio>
//                     <Radio value={null}>Rather not say</Radio>
//                 </RadioGroupField>
//             </>);
//         },
//     }
// }
//
// const mySignIn = async (vals, event) => {
//     event.preventDefault();
//     try {
//         await signIn({
//             username: vals['Field0'],
//             password: vals['Field1'],
//         });
//         console.log('Sign in successful');
//     } catch (error) {
//         console.error('Error signing in', error);
//     }
// };
//
// const mySignOut = async (event) => {
//     event.preventDefault();
//     try {
//         await signOut();
//         console.log('Sign out successful');
//     } catch (error) {
//         console.log('Error signing out: ', error);
//     }
// };
//
// const App = () => {
//     const {user, signOut} = useAuthenticator();
//
//     return user ? (
//         <div>
//             <h1>Hello, {user.username}</h1>
//             <button onClick={signOut}>Sign Out</button>
//         </div>
//     ) : (
//         <Authenticator/>
//     );
// };
//
//
// export const MainPage = (props) => {
//     const {currentUser} = props;
//     return (
//         <div>
//             <h1>Welcome {currentUser.name}</h1>
//             <button onClick={mySignOut}>Sign Out</button>
//             <MyReminders currentUser={currentUser}/>
//             <MyHistory currentUser={currentUser}/>
//         </div>
//     )
// };
//
//
// const MyLoginPage = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//
//     return (<LoginPage frame4381={
//         isSignUp
//             ? <SignUpForm
//                 onSubmit={mySignUp}
//                 onCancel={() => setIsSignUp(false)}>
//             </SignUpForm>
//             : <Login
//                 onSubmit={mySignIn}
//                 onCancel={() => setIsSignUp(true)}
//             ></Login>}>
//     </LoginPage>)
// }
//
//
// const mySignUp = () => {
//     setIsSignUp(true);
// }
//
// const MySignUpPage = () => (<>rooooii</>)
//
//
// const MyReminders = ({currentUser}) => {
//     const [reminders, setReminders] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const reminders = await getRemindersFromDB(currentUser)
//             if (reminders !== undefined)
//                 setReminders(reminders.data.listReminders.items);
//         };
//
//         if (currentUser) {
//             fetchData();
//         }
//     });
//
//     return (
//         <div>
//             <h4>You've got {reminders?.length} reminder(s)!</h4>
//             {reminders && reminders.map((reminder, index) => (
//                 <div key={index}>  {/* Assign a unique key prop here */}
//                     <ul>
//                         <li>{reminder.periodicity}</li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     )
// }
//
// const MyHistory = ({currentUser}) => {
//     const [histories, setHistory] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const history = await getHistoryFromDB(currentUser)
//             if (history !== undefined)
//                 setHistory(history.data.listHistories.items);
//         };
//
//         if (currentUser) {
//             fetchData();
//         }
//     });
//
//     return (<div>
//         <h4>You've drank water {histories?.length} time(s)!</h4>
//         {histories && histories.map((history, index) => (
//             <div key={index}>  {/* Assign a unique key prop here */}
//                 <ul>
//                     <li>{history.date}</li>
//                 </ul>
//             </div>
//         ))}
//     </div>)
// }
//
// export default () => (
//     <Authenticator.Provider>
//         <App/>
//     </Authenticator.Provider>
// );
