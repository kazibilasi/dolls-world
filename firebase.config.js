// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdlYhi0GthGcv4Oz3N33va-KYb8GLiOE",
  authDomain: "dolls-world.firebaseapp.com",
  projectId: "dolls-world",
  storageBucket: "dolls-world.appspot.com",
  messagingSenderId: "757492717541",
  appId: "1:757492717541:web:4fb3e7795a0f0e094cc10c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;