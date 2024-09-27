// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export default app;