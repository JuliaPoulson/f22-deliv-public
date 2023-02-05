// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import StyledFirebaseAuth from '../components/StyledFirebaseAuth.tsx';

// ! DO NOT CHANGE THIS FILE.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBGBU4NrmkAx72cJPfswE9AsGdmYClGf58",
   authDomain: "t4sg-s23-deliv.firebaseapp.com",
   projectId: "t4sg-s23-deliv",
   storageBucket: "t4sg-s23-deliv.appspot.com",
   messagingSenderId: "1044112625899",
   appId: "1:1044112625899:web:2b0a8590a6e34c0a5b2eae",
   measurementId: "G-QFVJ8ELYM3"
};

// Configure FirebaseUI.
const uiConfig = {
   // Popup signin flow rather than redirect flow.
   signInFlow: 'popup',
   // We will display Github as auth providers.
   signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
   ],
   callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
   },
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore();

// Export FirebaseUI signin screen
export function SignInScreen() {
   return (
      <div>
         <h1>Sign in to Links for Climate Good</h1>
         <p>Please sign-in with your Github account:</p>
         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
   );
}
