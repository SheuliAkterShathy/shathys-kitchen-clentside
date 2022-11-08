// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1biw-e3pWpmTOD12bikFlR98kVJErIYw",
  authDomain: "shathyskitchen.firebaseapp.com",
  projectId: "shathyskitchen",
  storageBucket: "shathyskitchen.appspot.com",
  messagingSenderId: "513164243039",
  appId: "1:513164243039:web:f85cec00bc2cc2ba56abea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;