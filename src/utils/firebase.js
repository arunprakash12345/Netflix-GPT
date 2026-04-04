// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWACHeg28O0sHBEErCiF7Wli56ezNzPns",
    authDomain: "netflix-gpt-e3664.firebaseapp.com",
    projectId: "netflix-gpt-e3664",
    storageBucket: "netflix-gpt-e3664.firebasestorage.app",
    messagingSenderId: "235967494846",
    appId: "1:235967494846:web:7a7e5064d5090fdc397cef",
    measurementId: "G-RW1GE1NFPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();