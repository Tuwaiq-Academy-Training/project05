import { FaDev, FaMicrophoneAlt } from 'react-icons/fa';
import {FcHome, FcList ,FcLike} from 'react-icons/fc';
import {ImVideoCamera,ImWondering} from 'react-icons/im';
import {BsFillTagFill,BsLightbulb} from 'react-icons/bs';
import {GrShop} from 'react-icons/gr';
import {GiFrenchHorn} from 'react-icons/gi';
import {CgReadme} from 'react-icons/cg';
import {VscTwitter} from 'react-icons/vsc';
import {AiFillFacebook , AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import {FiTwitch} from 'react-icons/fi';
export function Sidebar(){
    return(
        <div className="leftBar">
           <div className="leftBar-menu">
            <ul>
                <li>
                    <a href="/home">
                        <i><FcHome/></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/listing">
                        <i><FcList/></i>
                        Listings
                    </a>
                </li>
                <li>
                    <a href="/Podcasts">
                        <i><FaMicrophoneAlt/></i>
                        Podcasts
                    </a>
                </li>
                <li>
                    <a href="/video">
                        <i><ImVideoCamera/></i>
                        Videos
                    </a>
                </li>
                <li>
                    <a href="/tag">
                        <i><BsFillTagFill/></i>
                        Tags
                    </a>
                </li>
                <li>
                    <a href="/faq">
                        <i><BsLightbulb/></i>
                        FAQ
                    </a>
                </li>
                <li>
                    <a href="/foremshop">
                        <i><GrShop/></i>
                        Forem Shop
                    </a>
                </li>
                <li>
                    <a href="/sponsors">
                        <i><FcLike/></i>
                        Sponsors
                    </a>
                </li>
                <li>
                    <a href="/about">
                        <i><FaDev/></i>
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        <i><GiFrenchHorn/></i>
                       Contact
                    </a>
                </li>
                <li>
                    <a href="/guides">
                        <i><CgReadme/></i>
                        Guides
                    </a>
                </li>
                <li>
                    <a href="/softwarecomparisons">
                        <i><ImWondering/></i>
                        Software comparisons
                    </a>
                </li>

                <h3>Other</h3>
           <div className="leftBar-social">
           <a href="#"><i><VscTwitter size={25}/></i></a>
           <a href="#"><i><AiFillFacebook size={25}/></i></a>
           <a href="#"><i><AiFillGithub size={25}/></i></a>
           <a href="#"><i><AiFillInstagram size={25}/></i></a>
           <a href="#"><i><FiTwitch size={25}/></i></a>
           </div>
            </ul>
    
        
           </div>

        </div>
    ); 

}