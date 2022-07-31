
import { Link } from 'react-router-dom';
import { CgProfile} from 'react-icons/cg';
export function Navbar() {
    return (
  
         <div className='ic'>
         <Link to={'/posts'}>  <img src=" https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png " alt =''width={50}/>  </Link>
        
         <input type="text"  placeholder="search" className='search'/>
     
         <div className='bt'>
         <Link to={'/Profile'}> <a  href="#about"> <CgProfile  size={20} /></a> </Link>
         <Link to={'/Login'}> <button className='button'><a  href="#about">  Login</a> </button></Link>
        <Link to={'/Regester'}> <button className='button'><a  href="#about"> Register</a> </button></Link>
  
        </div>
      
        </div>
        






    );
  }






	
