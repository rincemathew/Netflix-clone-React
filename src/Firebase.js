// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyDz7Tp4c9gwfH3aYY_1ZD6-h90bXcm4EJo",
  authDomain: "netflix-react-4b3e0.firebaseapp.com",
  projectId: "netflix-react-4b3e0",
  storageBucket: "netflix-react-4b3e0.appspot.com",
  messagingSenderId: "589224182546",
  appId: "1:589224182546:web:78035c41c31adf890ee9cb",
  measurementId: "G-VX6LX3M1S9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)