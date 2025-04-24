import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJLeEUTRFGrMd0iYvdRQibIu0Qaw6iyRg",
  authDomain: "pulse-anyapp.firebaseapp.com",
  projectId: "pulse-anyapp",
  storageBucket: "pulse-anyapp.firebasestorage.app",
  messagingSenderId: "1032250507504",
  appId: "1:1032250507504:web:8796d13330f6f2ae384235",
  measurementId: "G-WY9Q5CWEBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
