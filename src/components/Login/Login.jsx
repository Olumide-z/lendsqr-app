import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/AuthContext";
import "./login.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/users");
    } catch (error) {
      console.log(error.message)
    }
  };
  
  return (
    <div>
      <h2 className="login-heading">Welcome!</h2>
      <p className="login-text">Enter details to login.</p>
      <form onClick={handleSubmit}>
        <div className="input-field">
          <input 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
           />
          <button className="show-btn">SHOW</button>
        </div>
        <p className="forgot-password">FORGOT PASSWORD ?</p>
        <button className="login-btn">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
