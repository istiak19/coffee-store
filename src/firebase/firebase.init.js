// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWxywVgaOWASTd98E7rcoaSTYeQxe6vlY",
    authDomain: "coffee-store-adb34.firebaseapp.com",
    projectId: "coffee-store-adb34",
    storageBucket: "coffee-store-adb34.firebasestorage.app",
    messagingSenderId: "378614871192",
    appId: "1:378614871192:web:9621baf73381935adacced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;