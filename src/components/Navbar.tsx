// import { posts } from '../data';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import { FiBell, FiCompass, FiHeart, FiUser } from 'react-icons/fi';


export function Navbar()
{
    const [state, setstate] = useState(false)
    function dropdawon(){

        return
        
        <div>

        </div>
           
    }
    return(
        <>
       <div className="nav-container">
            
        <div className="start-navbar">
        <Link to="/">
                    <img  className="Navbar-logo" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="dev-logo" width="50px" height="40px" />
                    </Link>
        <input  className="search-box" placeholder="Enter Post Title"/>
        </div>
         

        <div className="Nav-sectiontwo">
        <button type="button" className="btn">Create Post</button>
        <FiBell className='bell' size={30} />
        <div>
        <Link to="/profile">
       
        <img className="profilephoto" src="https://images.unsplash.com/photo-1656955775222-5c0fbbd7a121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg5NjczNTY&ixlib=rb-1.2.1&q=80&w=1080" alt="" width="40px" height="40px"/>
        </Link>
        {/* <ul className="profile-list">
        <Link to="/profile" className="dropdownlist-profilepage">
            <li>profile page</li>
        </Link>

        <Link to="/profile" className="dropdownlist-dashboard">
            <li>Dashboard</li>
        </Link>

        <Link to="/profile" className="dropdownlist-createpost">
            <li>Create post</li>
        </Link>

        <Link to="/profile" className="dropdownlist-readinglist">
            <li>Reading lis</li>
        </Link>

        <Link to="/profile" className="dropdownlist-setting">
            <li>Setting</li>
        </Link>

        <Link to="/profile" className="dropdownlist-sigmout">
            <li>Sign Out</li>
        </Link> */}

           

        {/* </ul> */}


      

        </div>

        </div>
       
        
        <div className="last-icon">
       
        </div>

        </div>
        
        </>
    );
}
