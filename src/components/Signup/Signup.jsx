import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/AuthContext";

import './signup.css';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {signUp} = useUserAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signUp(email, password);
      navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <div className="sign-up">
        <h2>Register</h2>
        <p className="login-text">Enter details to register.</p>
        <form>
        <div className="input-field">
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-field">
          <input type="name" placeholder="Name" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="show-btn">SHOW</button>
        </div>
        <button className="login-btn" onClick={handleSubmit}>REGISTER</button>
      </form>
    </div>
  )
}

export default Signup