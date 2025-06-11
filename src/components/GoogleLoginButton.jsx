import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";




const GoogleLoginButton = () => {
  const web_app_url = "https://script.google.com/macros/s/AKfycbyE7u3MgHSNXCjRQ_PURH7J8UcHwfUtKmPi1sMO-L54kfJfFLvjlKY2VyZHjxg8lgQK6w/exec";

  const sendToSheet = async (user) => {
    await fetch(web_app_url, {
      method: "POST",
      mode: "no-cors", // Required for frontend-only
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        uid: user.sub,
      }),
    });
  };
  const naviagte = useNavigate();
  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const user = jwtDecode(token);
    console.log("User info:", user);
    sendToSheet(user);
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login successful!");
    if (localStorage.getItem('user')) {
      naviagte('/')
      window.location.reload();
    }
  };

  const handleError = () => {
    console.error("Login Failed");
    alert("Login failed. Try again.");
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleLoginButton;
