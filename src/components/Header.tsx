import { FiBell, FiUserCheck } from "react-icons/fi"
import '../style/index.css';


export function Header(){
    return(

         
        <div className="header">

            <div className="logo">
                <img className="logoimg" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"  alt="" />
                <input type="text" placeholder="Search.."></input>
                <button type="button">Create Post</button>
                < FiBell className="icon" />
                <FiUserCheck />

            </div>

        </div> 

    )}


export default Header