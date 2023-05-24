// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey:'AIzaSyBO9R-8MxePaIJ1tUZV7TCyEj1ALEnPWXo',
    authDomain: 'react-firebase-auth-5fc2f.firebaseapp.com',
    projectId: 'react-firebase-auth-5fc2f',
    storageBucket: 'react-firebase-auth-5fc2f.appspot.com',
    messagingSenderId: '615211616467',
    appId:'1:615211616467:web:026bba90edf26f64a8ac26'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;