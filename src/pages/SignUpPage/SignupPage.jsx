import React from 'react'
import { Link } from 'react-router-dom';
import Signup from '../../components/Signup/Signup';

import './signupPage.css';

const SignupPage = () => {
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
          <Signup />
        </div>
          <Link to='/'><p className="new-user-2">
            Already have an account? Click here to Login in
          </p>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default SignupPage