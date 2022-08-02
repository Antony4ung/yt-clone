// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFdnAM4taNXx-7PAO9PuJ0fi_f9FCE-IU",
  authDomain: "clone-512a3.firebaseapp.com",
  projectId: "clone-512a3",
  storageBucket: "clone-512a3.appspot.com",
  messagingSenderId: "935667475577",
  appId: "1:935667475577:web:0b787ae86199017ddba0a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

