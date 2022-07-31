// import { Link } from 'react-router-dom';
// import { FiHeart} from 'react-icons/fi';
// import { MdHomeFilled} from 'react-icons/md';
// import { AiFillSetting} from 'react-icons/ai';
// import {TiCompass } from 'react-icons/ti';

// export function Navbar() {
// 	return (

//   <div className='navbar'>
//   <div className='logo'>
//    <img className='img-nav' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="img" />
//    </div>
// 	   <div className="navigation-search">
// 	   <input className="search-bar" type="text" placeholder="Search .."/>
// 	   </div>
	   
// 	   <div className="navigation-icons">
// 	   <div className='icons'>
// 	   <Link to={'/'}> <MdHomeFilled/></Link> 
// 	   <Link to={'/setting'}> <AiFillSetting/></Link> 
// 		   <TiCompass/>
// 		   <FiHeart/>
// 		   {/* <Link to={'/profile'}> <img className='img-nav' src="data:image/jpeg;base64,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" alt="img" /></Link> */}
// 		   </div> 
// 		  </div>
// 		  </div>
	  

// 	);
// }

import { FiSearch } from "react-icons/fi";
export default function Navbar() {
  return (
    // eslint-disable-next-line
    <div className="header">
      <div className="nav-bar">
        <div> <img  className="dev-img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="img" /></div>
        <form>
          <div className="search-input">
            <input className="input-on-search" type="text" placeholder="Search..."/>
            <FiSearch className="search-icon"/>
          </div>
        </form>
        <div className="Login-create">
          <a href="login" className="login-box">Log in</a>
          <a className="create-account" href="signup">Create account</a>
        </div>
      </div>
    </div>
  )
}