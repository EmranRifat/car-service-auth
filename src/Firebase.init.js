// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoCYLtp7l6mH0FJJ7Pf0exxL-sdZMFrac",
    authDomain: "genius-car-services-f9ed5.firebaseapp.com",
    projectId: "genius-car-services-f9ed5",
    storageBucket: "genius-car-services-f9ed5.appspot.com",
    messagingSenderId: "749511217662",
    appId: "1:749511217662:web:2cf49ddf8e133a969a70af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
