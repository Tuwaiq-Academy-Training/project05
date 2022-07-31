import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<nav className='nav-bar'>
			<Link to={'/posts'}>Posts</Link>
			<Link to={'/profile'}>Profile</Link>
            <Link to={'/header'}>Header</Link>
			<Link to={'/podcast'}>Podcast</Link>

			

		</nav>
	);
}
