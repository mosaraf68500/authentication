// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwigb0C6aasSIuyn0OJy7gujqBEpoeblc",
  authDomain: "simple-firebase2-1584f.firebaseapp.com",
  projectId: "simple-firebase2-1584f",
  storageBucket: "simple-firebase2-1584f.firebasestorage.app",
  messagingSenderId: "839960464235",
  appId: "1:839960464235:web:600f021687e4bd7e41da2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;