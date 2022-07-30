import { FiCompass, FiHeart, FiHexagon, FiHome, FiMic, FiMoreHorizontal, FiSettings, FiTag, FiUser, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export function Home() {
	return (
        <div>
            <div className="sidenav">
                <div className='side-nav-gap'>
                <div className='side-link'>
                <FiHome className='icon heart' size={25} />
                <Link to={'/'}>Home</Link>
                </div>
                <div className='side-link'>
                <FiMic className='icon heart' size={25} />
                <a>Podcasts</a>
                </div>
                <div className='side-link'>
                <FiTag className='icon heart' size={25} />
                <Link to={'/tags'}>Tags</Link>
                
                </div>
                <div className='side-link'>
                <FiVideo className='icon heart' size={25} />
                <a>Videos</a>
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
    <div className='main-article'>
        <div>
            <img className='cover-image' src="https://res.cloudinary.com/practicaldev/image/fetch/s--TTdRBnNb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lk370zks4u3tascjii47.png" alt="" />
        </div>
        <div className='user-posted'>
            <img className='user-image' src="https://res.cloudinary.com/practicaldev/image/fetch/s--xbVeyYak--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/42655/45ddf8ef-9d97-4d34-a5d6-a967db185062.jpeg" alt="" />
            <div className='time-posted'>
            <h6>Shinji Nakamatsu</h6>
            <h6>Posted on Jul 29</h6>
            </div>
        </div>
        <div>
            <h1 className='h1-title'>Migrating your React App to React Router v6</h1>
        </div>
        <div className='article-tags'>
            <h4> #java</h4>
            <h4> #react</h4>
            <h4> #web3</h4>
        </div>
        <div className='article-reaction'>
            <div>
            <FiHeart className='icon heart' size={14} />
                <a>20 reactions</a>
            </div>
            <div>
            <FiHexagon className='icon heart' size={14} />
                <a>6 comments</a>
            </div>
            <div>
                <button className='save-button'>Save</button>
            </div>
            
        </div>
    </div>
    <div className='main-article2'>
        <div>
            <img className='cover-image' src="https://res.cloudinary.com/practicaldev/image/fetch/s--bdIWo_BT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1t9e92q4ekhosxzjjce.png" alt="" />
        </div>
        <div className='user-posted'>
            <img className='user-image' src="https://res.cloudinary.com/practicaldev/image/fetch/s--3CP8vNrB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/133566/a889d17e-0765-4eac-92b1-1596ff51f3e4.png" alt="" />
            <div className='time-posted'>
            <h6>Shinji Nakamatsu</h6>
            <h6>Posted on Jul 29</h6>
            </div>
        </div>
        <div>
            <h1 className='h1-title'>12 Must Have Browser Extensions for Developers</h1>
        </div>
        <div className='article-tags'>
            <h4> #java</h4>
            <h4> #react</h4>
            <h4> #web3</h4>
        </div>
        <div className='article-reaction'>
            <div>
            <FiHeart className='icon heart' size={14} />
                <a>20 reactions</a>
            </div>
            <div>
            <FiHexagon className='icon heart' size={14} />
                <a>6 comments</a>
            </div>
            <div>
                <button className='save-button'>Save</button>
            </div>
            
        </div>
    </div>
</div>
        </div>
    )}