import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // Username input state

  const handleLogin = () => {
    if (username.trim()) {
      login(username); // Set username in AuthContext
      navigate("/home"); // Navigate to the homepage
    } else {
      alert("Please enter a username"); // Simple validation
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", fontSize: "16px", width: "200px" }}
      />
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
