import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";
import {generateClient} from "aws-amplify/api"; // Assuming this is the path to your App component

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);




reactRoot.render(<App />);
