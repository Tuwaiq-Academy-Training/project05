import { NavbarPage } from "../componets/Navbar";
import { AiOutlineGithub } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Profile() {
    const profile = JSON.parse(localStorage.getItem('Profile') || "")
    return (
        <>
            <NavbarPage />

            <div className="container-profile-top">
                <div>
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--XdcSgT9F--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/900172/81f595f2-d799-409e-8c16-021379427f93.png" alt="" height={100} width={100} />
                </div>
                <div>

                    <Link to={'/edit-profile'}><button>Edit profile</button></Link>

                </div>
                <div className="profile-info">
                    <h1>{profile.name}</h1>
                    <p>{profile.username}</p>
                    <div p-icon>
                        {/* <FaBirthdayCake /> */}
                        <p>{profile.email}</p>
                        {/* <AiOutlineGithub /> */}
                    </div>
                </div>

            </div>
            <div className="container-profile-down">
                <div>
                    <FiFileText />
                    <p>0 posts publish</p>
                </div>
                <div>
                    <BsChatText />
                    <p>0 comments written</p>
                </div>
                <div>
                    <FiFileText />
                    <p>2 tags followed</p>
                </div>
            </div>
        </>
    )
}