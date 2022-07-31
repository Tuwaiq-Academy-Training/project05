import { Link } from 'react-router-dom';

import{BsFillGearFill,BsFillPersonFill} from "react-icons/bs";




export function Navbar() {
	return (


		<nav className='topnav'>
			<div>
  
			<div className='first-logo'>
			<Link  className='logo' to={'/posts'}><img src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'></img></Link>

				 {/* home */}
			{/* <Link  className='logo' to={'/'}>Home</Link>
			<BsInstagram className='iconInstagram' size={24}/> */}
			{/* <Link  className='logo' to={'/posts'}>Instagram</Link> */}
			</div>

			</div>
			       {/* search */}
			<input className='search' type="text" placeholder='search here ..' />
			<div className='sec-nav'>
			<Link to={'/setting'}><BsFillGearFill  className='a' size={24} /></Link>
			
			{/* <BsFillSuitHeartFill className='iconFill ' size={24} /> */}
			
			{/* <Link to={'/profile'}><BsFillPersonFill className='a' size={24} /></Link> */}
			<a href='login'> Log in</a>
			<Link to={"/signup"}><input type="button" value="Create account" className="btn" /></Link>
			

			{/* <Link to={'/profile'}>Profile</Link>
			<input type="text" placeholder="Search.."></input> */}
	
	</div>
		</nav>

    // <div className="nav-menu">
    //       <div>
    //            <p className="menu">MENU</p>               
	// 		    <div className="nav-menu-link">Discover</div>
    //             <div className="nav-menu-link">Trending</div>
    //              <div className="nav-menu-link">Streaming</div>
    //             <div className="nav-menu-link">Bookmarks</div>
	// 		</div>
	// 			</div> 


	);
}

 
