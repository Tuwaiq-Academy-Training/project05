import {  FiHome,  FiTag, FiVideo ,FiTv } from 'react-icons/fi';
import { AiFillAudio ,AiOutlineNotification} from "react-icons/ai";
import { Link } from 'react-router-dom';
export function Sidenav() {
	return (
<div>
            <div className="sidenav">
                <div className='side-nav-gap'>
                <div className='side-link'>

                <FiHome className='icon heart' size={25} />
                <Link to={'/posts'}>Home</Link>
                </div>
                <div className='side-link'>
                <FiTv className='icon heart' size={25} />
                <Link to={'/podcast'}> Podcasts</Link>
                </div>
                <div className='side-link'>
                <FiTag className='icon heart' size={25} />
                <Link to={'/tags'}>Tags</Link>
                
                </div>
                <div className='side-link'>
                <FiVideo className='icon heart' size={25} />
                <Link to={'/videos'}><a>Videos</a></Link>
                </div>
                </div>
                

</div>

{/* <!-- Page content --> */}
<div className="main">
    <div className='top-article'>
    <h3>Relevant</h3>
        <h3>Latest</h3>
        <h3>Top</h3>
    </div>

</div>
</div>

    );
}