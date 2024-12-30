import React, { useState } from "react";
import UserService from "../service/RegndUser.service"; // API service for user login
import { useNavigate } from "react-router-dom";
import "../styles/User.css"; // Updated styles

const UserLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await UserService.login(username, password);
      if (response.data) {
        const userId = response.data.id; // Assume the backend returns the user ID
        sessionStorage.setItem("userId", userId); // Store user ID in session storage
        setLoginStatus("Login successful!");
        // navigate(`/apply/${userId}`); // Redirect dynamically to the user's route
        navigate("/userapplyjobs")
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginStatus("Incorrect password. Please try again.");
      } else if (error.response && error.response.status === 404) {
        setLoginStatus("Username not found. Please create an account.");
      } else {
        setLoginStatus("An error occurred. Please check your username and password.");
      }
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to your account</p>
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="btn login-btn" onClick={handleLogin}>
          Login
        </button>
        <button className="btn register-btn" onClick={handleRegisterRedirect}>
          Create Account
        </button>
        <div className="login-status">{loginStatus}</div>
      </div>
    </div>
  );
};

export default UserLoginPage;
