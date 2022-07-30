import { Link } from 'react-router-dom';
import { FaBeer,  } from 'react-icons/fa';
import { FiCompass, FiHeart, FiInbox, FiInstagram, FiUser } from 'react-icons/fi';


export function Navbar() {
	return (
		<nav >
			<div className='navBar'>
				<div className='left-nav'>
					<Link to={'/'}><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" /></Link>
				<input type="text" placeholder='search...' />
				</div>
				<div className='right-nav'>
				<Link to={'/login'}><button>Login</button></Link>
					<Link to={'/post'}><button>Create Post</button></Link>
					<FiInbox className='icon heart' size={25} />
					<FiUser className='a' size={25} />
				</div>
			</div>
		</nav>
		
	);
}
