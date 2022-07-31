import "./Navbar.css";

import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../app/redux/user/userSlice";

export function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar__left">
          <Link to={"/"}>
            <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="DEV Community" />
          </Link>
          <div className="navbar__input">
            <input type="text" placeholder="Search..." />
       <FiSearch />
          
          </div>
        </div>
        {user ? (
          <div className="navbar__right">
            <div onClick={handleLogout} className="navbar-buttons navbar__login">
              Log out
            </div>
            <Link to="/new/posts" className="navbar-buttons navbar__create">
              Create Post
            </Link>
            <Link to="/profile" className="navbar__user">
              <img className="my-avatar" src="profileimage.png" alt="" />
            </Link>
          </div> ) : (<div className="navbar__right">
            <Link to="/login" className="navbar-buttons navbar__login">
              Log in
            </Link>
            <button className="navbar-buttons navbar__create">
              Create account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


