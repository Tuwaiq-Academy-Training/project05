import "./Side-menu.css";
import { AiFillFacebook, AiFillGithub,AiFillInstagram } from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";

import{FiTwitch}from "react-icons/fi";

import{FcHome} from "react-icons/fc"
import { Link } from "react-router-dom";

export function Sidemenu(){
  return (
    <div className="Sidemenu">
      <Link to="/" className="sideItem">
      <FcHome/> 
        <span>Home</span>
      </Link>
      <Link to="/pod" className="sideItem">
      📖 
        <span>Reading List</span>
      </Link>
   
      <Link to="/lists" className="sideItem">
        <span>📜 Listings</span>
      </Link>
      <Link to="/podcasts" className="sideItem">
      <span> 🎙 Podcasts </span>
    </Link>
      <Link to="/videos" className="sideItem">
        <span>🎥 Videos</span>
      </Link>
      <Link to="/tags" className="sideItem"><span>🏷 Tags </span></Link>
   
    <div className="side-icons">
    <a href="https://twitter.com/AxendaTeam">< BsTwitter size={25}/></a>
    <a href="https://ar.axenda.io">
    <AiFillFacebook size={25}/></a>
    <a href="https://github.com/DaadAlsaif"> <AiFillGithub size={25}/></a>
    <a href="https://www.instagram.com/axendateam/">    <AiFillInstagram size={25}/></a>
    <a href="https://ar.axenda.io">    <FiTwitch size={25}/></a>
    
</div>
        </div>
   
  );
};

