import "./Navbar.css";
import Logo from "../../images/logo.png";
import { FiSearch, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../app/redux/user/userSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="navbar__input">
            <input type="text" placeholder="Search..." />
            <FiSearch />
          </div>
        </div>
        {user ? (
          <div className="navbar__right">
            <div onClick={handleLogout} className="navbar__btn navbar__login">
              Log out
            </div>
            <Link to="/new" className="navbar__btn navbar__create">
              Create Post
            </Link>
            <Link to="/profile" className="navbar__user">
              <FiUser />
            </Link>
          </div>
        ) : (
          <div className="navbar__right">
            <Link to="/login" className="navbar__btn navbar__login">
              Log in
            </Link>
            <button className="navbar__btn navbar__create">
              Create account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
