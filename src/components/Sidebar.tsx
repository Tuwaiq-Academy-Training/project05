import {  FiBookOpen, FiCast, FiHome, FiList } from "react-icons/fi"
import '../style/sidebar.css';
import { Link } from 'react-router-dom';

export function Sidebar(){
    return(




    <nav className="sid-bar">

  <a href="#"><FiHome /> Home</a>
  <a href="#"><FiBookOpen /> Reading </a>
  <a href="#"> <FiList /> Listing</a>
  <Link to={'/podcast'}><a href="#"><FiCast/> Podcaste</a></Link>
  <a href="#"><FiHome /> Videos</a>
  <a href="#"><FiHome />Tags</a>
  <a href="#"><FiHome />FAQ</a>
  <a href="#"><FiHome />Forem Shop</a>
  <a href="#"><FiHome />Sponsore</a>
  <a href="#"><FiHome />About</a>
  <a href="#"><FiHome />Contact</a>
  <a href="#"><FiHome />Guides</a>
  
</nav>

    )
}
export default Sidebar