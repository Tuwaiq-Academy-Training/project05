import { Link } from "react-router-dom";

export function Nav(){
    return <>
    <nav>
        <div className='first-part'> 
        <img className='logo' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo" />   
        <input className='search-box' type="text" placeholder="Search..." />
        </div>

        <div className='second-part'>
        <Link to={'/login'} className="Link"><div className='login-btn'>Log in</div></Link>
         <div className='create-btn'>Create account</div>
        </div>
    </nav>
    </>
}