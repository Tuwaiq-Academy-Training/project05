import "./SideList.css";
import {
  FaHome,
  FaPodcast,
  FaTags,
  FaAtlas,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideList = () => {
  return (
    <div className="sideList">
      <Link to="/" className="sideItem">
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/pod" className="sideItem">
        <FaPodcast />
        <span>Podcasts</span>
      </Link>
      <Link to="/tags" className="sideItem">
        <FaTags />
        <span>Tags</span>
      </Link>
      <div className="sideItem">
        <FaAtlas />
        <span>About</span>
      </div>
      <div className="sideItem">
        <FaCompressArrowsAlt />
        <span>Software comparisons</span>
      </div>
    </div>
  );
};

export default SideList;
