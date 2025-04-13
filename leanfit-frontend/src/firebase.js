// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";  

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyArR-kR6eHj6D9n-Gc8YMF5XmEGWm69k5o",
  authDomain: "leanfit-180cb.firebaseapp.com",
  projectId: "leanfit-180cb",
  storageBucket: "leanfit-180cb.firebasestorage.app",
  messagingSenderId: "15275299240",
  appId: "1:15275299240:web:d47c00db15298d30f54d9d",
  measurementId: "G-7G8HJCERBG"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Auth and 📊 Analytics
const auth = getAuth(app);

const db = getFirestore(app); 

const messaging = getMessaging(app);

export { auth, db ,messaging};