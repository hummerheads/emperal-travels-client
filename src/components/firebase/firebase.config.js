// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEUueESz3A_amaXzP4jRNEeCzMn2mg6dg",
  authDomain: "emperal-travels-server.firebaseapp.com",
  projectId: "emperal-travels-server",
  storageBucket: "emperal-travels-server.appspot.com",
  messagingSenderId: "597221070334",
  appId: "1:597221070334:web:fdcbddd27b5c18210f1caf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { app, auth, db }; // Export db for use in other files