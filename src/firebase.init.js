import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlgSOiLc0DSE5p5SPTlnmLRFykzuysMZI",
    authDomain: "gymvast.firebaseapp.com",
    projectId: "gymvast",
    storageBucket: "gymvast.appspot.com",
    messagingSenderId: "112963495106",
    appId: "1:112963495106:web:91b9f888e93a0c695bc75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;