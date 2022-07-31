import React from "react";
import { FiHeart, FiSend, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FilterPage } from "./Filter";
import { Navbar } from "./Navbar";

export function HomePage()
{
  return(
      <>
      <Navbar/>
      <FilterPage/>
    

     <div className="filter-bar">
     <div className="setting-icon">
        
     
        </div>

     </div>

     <div className="home-body">
       
       {/* <h1 className="text-test"> im here  </h1> */}
       <div className="home-menu">
        
       <h3 className="text-test">Relevent</h3>
       <h3 className="text-test">Latest</h3>
       <h3 className="text-test">Top</h3>
       
       </div>

       <div className="hoem-container">
        <div className="homeocard">
            <div className="home-image home-1"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="home-onetext" href="https://dev.to/dailydevtips1/undo-wrong-git-changes-32mc">Undo wrong Git changes</a>
                {/* <Link to="/profile">
       
       <img className="profilephoto-home" src="https://images.unsplash.com/photo-1656955775222-5c0fbbd7a121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg5NjczNTY&ixlib=rb-1.2.1&q=80&w=1080" alt="" width="40px" height="40px"/>
       </Link> */}
                <p>Ryan Cartwright</p>
                <div className="home-boxicon">
                <FiHeart className='heart' size={20} />
                <p className="heart-comment"> 36 Reaction</p>
                </div>
                {/* <BiCommentEdit className='heart' size={20} /> */}
                


            </div>
            </div>

       

     </div>

   

      </>
  )
}