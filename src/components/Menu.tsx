import { FcHome, FcVideoCall} from 'react-icons/fc';
import { BsFillMicFill} from 'react-icons/bs';
import { VscTag} from 'react-icons/vsc';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { IoLogoTwitch} from 'react-icons/io';
import { Link } from 'react-router-dom';


export function Menu(){
    return <>
    <div className="menu">
      <Link to={'/loggedin'}className="Link"><div className="menu-tag"><FcHome size={20} /> Home</div></Link>  
      <Link to={'/podcast'}className="Link"><div className="menu-tag"><BsFillMicFill className='grey' size={20} />Podcasts</div></Link>
      <Link to={'video'} className="Link"><div className="menu-tag"><FcVideoCall size={20} />Videos</div></Link>
      <Link to={'/tag'} className="Link" ><div className="menu-tag"><VscTag className='tag-color' size={20} />Tags</div></Link>
       
       <div className='social-media'>
        <AiOutlineTwitter className='social-tag' size={20}/>
        <AiFillFacebook className='social-tag' size={20}/>
        <AiFillGithub className='social-tag' size={20}/>
        <AiFillInstagram className='social-tag' size={20}/>
        <IoLogoTwitch className='social-tag' size={20}/>
       </div>
    </div>
    </>
}