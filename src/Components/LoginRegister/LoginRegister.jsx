import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa6";
const LoginRegister = () => {
const [action, setAction]=useState('');
  const registerLink=()=>{
    setAction(' active');
  }

  const loginLink=()=>{
    setAction('');
  }
  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login" >
     
        <form action="" >

           <img
                src="/src/assets/MINDSHIELD__3_-removebg-preview.png"
                alt="Logo"
                className="logo"
                
              />
        
          <h1>Login an account</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required /><FaUser  className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required /><FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}>Create an account</a></p>
          </div>
        </form>
      </div>


      <div className="form-box register">
        <form action="">

        <img
                src="/src/assets/MINDSHIELD__3_-removebg-preview.png"
                alt="Logo"
                className="logo"
                
              />
          <h1>Create an account</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required /><FaUser  className='icon'/>
          </div>
          
          <div className="input-box">
            <input type="email" placeholder='Email' required /><FaEnvelope className='icon'/>
          </div>
          


          <div className="input-box">
            <input type="password" placeholder='Password' required /><FaLock className='icon'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder='Confirm Password' required /><FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default LoginRegister
