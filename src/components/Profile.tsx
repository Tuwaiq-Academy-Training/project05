import React from "react";
import { FiChevronDown, FiFacebook, FiGithub, FiMoreHorizontal, FiTwitch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export function ProfilePage()
{
    return(
        <>
        <Navbar/>
       
           
                
                <div>
                   
                    {/* <h1>this profile page </h1>   */}
                    

                    <div className="profile-container">
        <div className="profilecard">
            <div className="profile-image proimg-1"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}

                <Link to="/profile">
       
       <img className="profilephoto" src="https://images.unsplash.com/photo-1656955775222-5c0fbbd7a121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg5NjczNTY&ixlib=rb-1.2.1&q=80&w=1080" alt="" width="40px" height="40px"/>
       </Link>
                <a  className="profile-one" href=""> Ryan Cartwright</a>
                {/* <p>Ryan Cartwright</p> */}
                <FiFacebook className='facebook' size={20} />
                <FiGithub className='git' size={20} />
                <FiTwitch className='twit' size={20} />

            </div>
            </div>
                     
                    
                </div>
       
      
        </>
    )
}