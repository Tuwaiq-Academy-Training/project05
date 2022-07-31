import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { RiFileList3Fill, RiHashtag } from "react-icons/ri";
export default function Profile() {
  return (
    <>
    <div className="profile-header"></div>
    <div className="profile">
      <img className="img-profile" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZNqWj1Zm--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/900283/9928873a-fc27-441b-a4b8-c5e4951e3753.jpeg" alt="" />
      <div className="btn-edit">Edit profile</div>
      <div className="bio">
         <h1>lamia</h1>
         <h4>full stack developer</h4>
         <div className="bio-icon">
          <FaBirthdayCake size={20}/>
          <p>Joined 2022 july 29</p>
          <FaGithub className="git-info" size={20}/>
         </div>
      </div>
    </div>
    <div className="info">
      <div className="mor-info">
        <BsChat size={25}/>
        <p>0 posts published</p>
      </div>
      <div className="mor-info">
        <RiFileList3Fill size={25}/>
        <p>0 comments written</p>
      </div>
      <div className="mor-info">
        <RiHashtag size={25}/>
        <p>13 tags followed</p>
      </div>
    </div>
    </>
  )
}