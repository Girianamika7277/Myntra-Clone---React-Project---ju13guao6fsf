import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginPage.css"

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users)
    const userMatch = users.find((u) => u.username === username && u.password === password);
    if (userMatch) {
      navigate("/home");
    } else {
      window.alert("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" value={username} onChange={handleUsername} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <br />
        <button type="submit">Login</button>
        <p>Don't have an account <Link to="/registration">Please Register</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
