import {FaDev } from 'react-icons/fa';
import {RiNotificationLine} from 'react-icons/ri';
import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
export function Navbar(){
    //Drop Down Menu
    const [showMenu,setshowMenu]=useState(false);
    const toggle = ()=>{
        setshowMenu(!showMenu);
    }
    return(
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-hamburgerMenu"></div>
                <a href="#" className="navbar-content_logo">
                    <FaDev size={45}/>
                </a>
            <div className="navbar-content_search">
                <form>
                    <input type="text" placeholder="Search..."/>
                </form>
            </div>
            <div className="navbar-content_sideright">
                <button>Create Post</button>
                <li className='search-hidden'>
                    <FiSearch/>
                </li>
                <i>
                    <RiNotificationLine/>
                </i>
                <span onClick={toggle}>
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="avatar"/>
                </span>
            </div>

            </div>
         
            <div className={showMenu ? "dropdown-menu":"dropdown-menu-close"}>
               <ul>
                <li onClick={toggle}>
                    <a href='/profile'>
                        <div className="u-name">wasayf</div>
                        <div className="u-name-id">@wasayf</div>
                    </a>
                </li>
                <li onClick={toggle}>
                    <a href='/dashboard'>Dashboard</a>
                </li>
                <li onClick={toggle}>
                    <a href='/post'>Create Post</a>
                </li>
                <li onClick={toggle}>
                    <a href='/list'>Reading list</a>
                </li>
                <li onClick={toggle}>
                    <a href='/settings'>Settings</a>
                </li>
                <li onClick={toggle}>
                    <a href='/signout'>Sign Out</a>
                </li> 

               </ul>
            </div>
        </div>
       
    );
}