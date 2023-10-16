// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJ01iXEaaipqmnzNPZdVuDUNYST4JLQ0",
  authDomain: "coder-next-app.firebaseapp.com",
  projectId: "coder-next-app",
  storageBucket: "coder-next-app.appspot.com",
  messagingSenderId: "887606524211",
  appId: "1:887606524211:web:2c47b8089619547b832646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)