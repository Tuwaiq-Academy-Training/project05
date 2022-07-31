import { RiNotification3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export function LoggedinNav(){
    return <>
    <nav>
      <div className='first-part'> 
        <img className='logo' src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo" />   
        <input className='search-box' type="text" placeholder="Search..." />
        </div>

        <div className='nav-part2'>
          <Link to={'/create'}><div className='create-btn'>Create Post</div></Link>
         <RiNotification3Line size={30}/>
         <Link to={'/profile'}><img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="user-avatar"/></Link>
        </div>
    </nav>
    </>
}