// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg2E9bDWbHE971Lsqa-KdExqU8fG9zWHw",
  authDomain: "foodmasterapp-38126.firebaseapp.com",
  projectId: "foodmasterapp-38126",
  storageBucket: "foodmasterapp-38126.appspot.com",
  messagingSenderId: "345526471694",
  appId: "1:345526471694:web:5d612847e3011d4c10405f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

