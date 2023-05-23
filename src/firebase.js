import * as firebase from "firebase"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
});

export default app;