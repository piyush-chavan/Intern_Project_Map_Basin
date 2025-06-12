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
  const handleLoginSuccess = async(credentialResponse) => {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const token = credentialResponse.credential;
    const user = jwtDecode(token);
    console.log("User info:", user);
    sendToSheet(user);
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    // alert("Login successful!");
    if (localStorage.getItem('user')) {
      new window.bootstrap.Modal(document.getElementById('login-modal')).show();
      await sleep(8000);
      naviagte('/explore');
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

      <div id='login-modal' style={{ zIndex: '5000' }} class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 style={{color:'green'}} class="modal-title fs-5" id="staticBackdropLabel"><i class="fa-solid fa-circle-check"></i> Login Successful ! </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              You have Logged in successfully. <br />
              Visit Design Flood Data / Plots for different River Basins and guaging stations in a arranged and convinient way.
            </div>
            <div class="modal-footer">
              <button onClick={()=>naviagte('/explore')} style={{ backgroundColor: 'var(--primary)' }} type="button" class="btn btn-secondary">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLoginButton;
