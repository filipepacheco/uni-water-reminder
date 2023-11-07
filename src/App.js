import {Amplify} from 'aws-amplify';

import {Authenticator, Radio, RadioGroupField, useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
    return (
        <Authenticator components={{
            SignUp: {
                FormFields() {
                    return (
                        <>
                            <Authenticator.SignUp.FormFields/>
                            <RadioGroupField label="Gender" name="gender" direction="column" size="medium"
                                             defaultValue={null}>
                                <Radio value="MALE">Male</Radio>
                                <Radio value="FEMALE">Female</Radio>
                                <Radio value={null}>Rather not say</Radio>
                            </RadioGroupField>
                        </>
                    );
                },
            }
        }}>
            {({signOut, user}) => (
                <main>
                    <h1>Hello, {user.attributes.name.split(' ')[0]}! :)</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}