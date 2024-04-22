import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgRjBM5R_58op3zPryv8jE9bfIVB24y-E",
    authDomain: "projetotaugor.firebaseapp.com",
    databaseURL: "https://projetotaugor-default-rtdb.firebaseio.com",
    projectId: "projetotaugor",
    storageBucket: "projetotaugor.appspot.com",
    messagingSenderId: "650555471190",
    appId: "1:650555471190:web:1ac106c1c784d4a44992f7",
    measurementId: "G-7EVTH8FW11"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };

