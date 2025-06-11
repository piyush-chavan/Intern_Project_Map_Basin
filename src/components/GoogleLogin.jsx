import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const GoogleLogin = () => {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      });

      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed.");
    }
  };

  return <button onClick={login}>Sign in with Google</button>;
};

export default GoogleLogin;
