import React from "react";
import { FiBell, FiSearch, FiUserPlus } from "react-icons/fi";
import { Navbar } from "./Navbar";

export function SetingPage()
{
    return(
    <>
    <Navbar/>
   
    <div className="setting-container">
  
    <h1>seting  </h1>
       <div>
        <FiSearch className='icon heart' size={20} />
        <input  className="setingsearch" placeholder="Enter Post Title"/>
        </div>
       
        <div className="setting-icon">
         <FiUserPlus className='icon heart' size={20} />
        <h4>Follow and Invite Frinds</h4>
        </div>

        <div className="setting-busnes">
         <FiBell className='icon heart' size={20} />
        <h4>Notification</h4>

        

        </div>
       
    </div>
    
    </>
    )
}