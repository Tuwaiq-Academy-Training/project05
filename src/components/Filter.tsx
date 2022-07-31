import React from "react";
import { FiBell, FiFacebook, FiGithub, FiSearch, FiTwitch, FiTwitter, FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import home from '../assets/home.png';
import lising from '../assets/lising.png'
import podcast from '../assets/podcast.png'
import video from '../assets/video.png'
import tag from '../assets/tag.png'
import F from '../assets/F.png'
import Shop from '../assets/shop.png'
import sponser from '../assets/sponser.png'
import reading from '../assets/reading.png'
import about from '../assets/about.png'
import contact from '../assets/contact.png'
import gauid from '../assets/gauid.png'
import softwer from '../assets/softwer.png'
import code from '../assets/code.png'
import privacy from '../assets/privacy.png'
import terms from '../assets/terms.png'



export function FilterPage()
{
    return(
        <> 
        <div className="filter-contaner">

           <div className="home-container">
             {/* <FiSearch className='icon heart' size={20} /> */}
            
        <img src={home} alt="Insta" srcSet=""  width="24px" height="24px"/>
        <Link to="/">
                <p className="home-word">Home</p>
                </Link>
          </div>

          <div className="reading-container">
            <img src={reading} alt="Insta" srcSet=""  width="24px" height="24px"/>
              <p className="home-word">Reading List</p>


            </div>


            <div className="lising-container">
            <img src={lising} alt="Insta" srcSet=""  width="24px" height="24px"/>
              <p className="home-word">Listing</p>


            </div>
            

            <div className="podcast-container">
            <img src={podcast} alt="Insta" srcSet=""  width="24px" height="24px"/>
            <Link to="/podcast">
             <p className="podcast-word">Podcats</p>
             </Link>
            </div>

            <div className="video-container">
              
            <img src={video} alt="Insta" srcSet=""  width="23px" height="23px"/>
            <Link to="/video"> 
               <p className="Videos-word">Videos</p>
              </Link>
        </div>

        <div className="tag-container">
        <img src={tag} alt="Insta" srcSet=""  width="23px" height="23px"/>
            <Link to="/tags"> 
        <p className="tags-word">Tags</p>
        </Link>
        </div>

        <div className="FAQ-container">
        <img src={F} alt="Insta" srcSet=""  width="23px" height="23px"/>
        <p className="FAQ-word">FAQ</p>
        </div>

        <div className="forem-container">
        <img src={Shop} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="forem-word">Forem Shop</p>
        </div>

        {/* <div className="forem-container">
            <FiSearch className='forem icon' size={20} />
        <h4 className="forem-word">Foem Shop</h4>
        </div> */}

        <div className="sponsors-container">
        <img src={sponser} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="sponsors-word">Sponsors</p>
        </div>

        <div className="About-container">
        <img src={about} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="About-word">About</p>
        </div>

        {/* <div className="About-container">
            <FiSearch className='About icon' size={20} />
        <h4 className="About-word">About</h4>
        </div> */}

        <div className="Contact-container">
        <img src={contact} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="Contact-word">Contact</p>
        </div>

        <div className="Guides-container">
        <img src={gauid} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="Guides-word">Guides</p>
        </div>

        <div className="software-container">
        <img src={softwer} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="software-word">Software comparisons</p>
        </div>

        <div className="Other">
            <h3 className="other-title">Other</h3>

            <div className="code-container">
            <img src={code} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="code-word">Code of Conduct</p>
        </div>

        <div className="privacy-container">
        <img src={privacy} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="privacy-word">Privacy Policy</p>
        </div>

        <div className="terms-container">
        <img src={terms} alt="Insta" srcSet=""  width="22px" height="22px"/>
        <p className="terms-word">Terms of use</p>
        </div>

        <div className="social-container">
        <FiTwitter className='twitter' size={20} />
        <FiTwitch className='twit' size={20} />
        <FiFacebook className='facebook' size={20} />
        <FiGithub className='git' size={20} />
        <FiGithub className='github' size={20} />
        
        </div>


        </div>
        </div>


        

        
        </>
    )
}