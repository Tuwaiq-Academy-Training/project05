import { Link } from 'react-router-dom';
import { FiSearch} from 'react-icons/fi';


export function Navbar() {
	return (
		<nav >
			<div className='navBar'>
				<div className='left-nav'>
					<Link to={'/'}><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" /></Link>
				<div className='input-box'>
				<input type="text" placeholder='search...'  />
				 <FiSearch/>
				</div>
				</div>
				<div className='right-nav'>
				<Link to={'/login'}><button>Login</button></Link>
				</div>
			</div>
		</nav>
	);
}
