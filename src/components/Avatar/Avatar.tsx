import "./Avatar.css";
import profileimage from "../../images/profileimage.png";



export function Avatar(){
  return (
    <div
      className="avatar"
      style={{ width:"120px", height: "120px" }}
    >
      <img id="prof" src={profileimage} alt="avatar" />
    </div>
  );
};


