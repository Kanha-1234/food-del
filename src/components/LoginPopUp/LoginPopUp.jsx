import React, { useState } from 'react'
import './LoginpopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
    const [currentstate,setCurrentState] = useState("login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
         <div className="login-popup-title">
           <h2>{currentstate}</h2>
           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
         </div>
         <div className="login-popup-input">
            {currentstate === "login" ? <></>:
             <input type="text" placeholder='your name' required />}
           
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='password' required />
         </div>
         <button>{currentstate === "sign-up" ? "create account" : "login"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuning, i agree to the terns of use & privacy policy.</p>
         </div>{
            currentstate === 'login'? <p>Create a new account <span onClick={()=>setCurrentState("sign-up")}>click here</span></p> : 
            <p>Already have an account ? <span onClick={()=>setCurrentState("login")}>Login here</span></p>
         }
        
         
      </form>
    </div>
  )
}

export default LoginPopUp
