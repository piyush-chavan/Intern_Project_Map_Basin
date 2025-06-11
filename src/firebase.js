// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8E6zbznTjkJ67DsAHpdM7GZntoI-Gg7U",
  authDomain: "river-basin-webtool.firebaseapp.com",
  projectId: "river-basin-webtool",
  storageBucket: "river-basin-webtool.appspot.com", // ✅ FIXED
  messagingSenderId: "406546380667",
  appId: "1:406546380667:web:5929011b0e0fa681342fde",
  measurementId: "G-5NQLEVM0YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);