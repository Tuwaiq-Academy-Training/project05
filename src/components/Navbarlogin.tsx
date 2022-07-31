import { Link } from "react-router-dom";

export function Navbarlogin() {
	return (
<div className=' navbar1'>
  <div className='logo1'>
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
       {/* <img src="https://pbs.twimg.com/media/DpnuuvhWwAAlY8y.jpg" /> */}
     </div>
	   <div className="navigation-search-container">
	   <input className="search" type="text" placeholder="Search" />
	      
	   </div>
	   <div className="buttons">
	   <Link to={'/Login'}><button type="button"  className="btn-login">log in</button></Link>
	   <Link to={'/register'}><button type="button" className="btn-create " >create account</button></Link>
	   
	   
	   </div>

    </div>
	   
	  
	  
    )
}