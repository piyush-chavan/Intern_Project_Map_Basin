// Login.js
import { useNavigate } from "react-router-dom";
import './styles.css';
import { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import GoogleLoginButton from "./GoogleLoginButton";

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        navigate("/");
        window.location.reload();

    };

    return (
        <div>
            <br />
            <h2>Login Page</h2>

            <div className="loginBox">


                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Your Name</span>
                    <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <button className="btn btn-dark" onClick={handleLogin}>Login</button>

                {/* <GoogleLogin/> */}
                <GoogleLoginButton/>
            </div>
        </div>
    );
}

export default Login;
