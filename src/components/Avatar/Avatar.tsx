import "./Avatar.css";
import avatarImg from "../../images/avatar.png";

interface Props {
  sizePx?: number;
}

const Avatar = ({ sizePx }: Props) => {
  return (
    <div
      className="avatar"
      style={{ width: sizePx || "50px", height: sizePx || "50px" }}
    >
      <img src={avatarImg} alt="avarat" />
    </div>
  );
};

export default Avatar;
