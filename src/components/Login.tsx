import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import appstore from '../assets/appstore.png';
import google from '../assets/google.png';

export function LoginPage()
{
    return(
        <>
        <div className="login-container">
         
     <div className="login-logo">
     <Link to="/">
        <img src={logo} alt="Insta" srcSet="" />
        </Link>
     </div>
        <div className="login-searchbos">
         <input placeholder="Enter Post Title"/>
         <input placeholder="Enter Post Title"/>
         </div>
         <div className="login-btn">
         <button type="button" className="btn">Log in</button>
         </div>
         <div className="or-">
             <h4>OR</h4>
         </div>
         <div className="forget">
         <a  className="forget-text" href="">Forget password ?</a>
         </div>

    

            
        </div>

        <div className="login-boxtwo">
             <h4 className="boxtwo-textone">Dont have an account?</h4>
             <a  className="boxtwo-textwo" href="/Singinup">Sing up </a>

         </div>

           <div className="lastlogin-container">
             <h4 className="bootom-text">Get the app</h4> 
            
             <div className="lastlogin-photo">
             <img src={appstore} className="appstore" alt="" width="150px" height="40px"/>
             <img src={google} className="google" alt="" width="150px" height="40px"/>
             </div>

             </div>
    
  
</>
    )
}