import { Link } from 'react-router-dom';
import { Post } from './Post';


export function Home() {
	return (<>
        <div>
            <div className="sidenav">
                <div className='side-nav-gap'>
                <div className='side-link'>
                <span >🏠</span>
                <Link to={'/'} className='bar'>Home</Link>
                </div>
                <div className='side-link'>
                <span >🎙️</span>
                <a className='bar'>Podcasts</a>
                </div>
                <div className='side-link'>
                <span >🏷️</span>
                <Link to={'/tags'} className='bar'>Tags</Link>
                </div>
                <div className='side-link'>
                <span >📽️</span>
                <a className='bar'>Videos</a>
                </div>
                </div>
            </div>
            <Post/>
        </div>
        </>
    )}