// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2cu6PmAtps01c2zHfvhkfC4HYXhxZR20",
    authDomain: "assignment-10-2.firebaseapp.com",
    projectId: "assignment-10-2",
    storageBucket: "assignment-10-2.appspot.com",
    messagingSenderId: "578936891781",
    appId: "1:578936891781:web:c4151e3eab6967fa9ebcec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);