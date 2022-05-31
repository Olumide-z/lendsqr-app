import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../../components/Login/Login'

import './loginPage.css';

const LoginPage = () => {
  return (
     <div className="container">
      <div className="login-section">
        <div className="left-side">
          <div className="logo-container">
            <img src='/images/logo.svg' alt='' className='img1'/>
            <img src="/images/lendsqr.svg" alt="logo" className='img2'/>
          </div>
          <div className="login-image-container">
          <img src='/images/loginImage.svg' alt="" className="login-image"/>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-section">
            <Login />
          </div>
          <Link to='/sign-up'>
            <p className="new-user-1">
              New user? Click here to Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage