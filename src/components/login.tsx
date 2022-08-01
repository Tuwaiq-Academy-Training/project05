import { Link } from 'react-router-dom';
import { RiAppleFill } from "react-icons/ri";
import { ImGoogle2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";


export function LoginPage() {
	return (
        <div>
      
      <div className="s-container">
        
        <div className="welcome">
          <h1>Welcome to DEV Community</h1>
          <p className="comm">
            {" "}
            <span className="bluetxt">DEV Community</span> is a community of
            823,581 amazing developers
          </p>
          <div className="btns">
            <button className="apple">
              <RiAppleFill /> &nbsp; Sign up with Apple
            </button>
            <button className="google">
              <ImGoogle2 /> &nbsp; Sign up with Google
            </button>
            <button className="git">
              <AiOutlineGithub /> &nbsp; Sign up with Github
            </button>
            <button className="twit">
              <GrTwitter /> &nbsp; Sign up with Twitter
            </button>
          </div>
          <p className="txt">
            <span>-----</span> Already Have an Accoount ?{" "}
            <Link to={`/login`} className="sign-to-login">
              {" "}
              Click Here{" "}
            </Link>
            <span>-----</span>
          </p>
          <section className="credentials">
            <form >
              <p>Email</p>
              <input
                className="inp"
                type="email"
                required
              />
              <p>Password</p>
              <input
                className="inp"
                type="password"
                required
                
              />
              <p className="rem">
                <span>
                  <input type="checkbox" />
                </span>{" "}
                Remember me
              </p>
              <button className="cont-btn">Continue</button>
            </form>
          </section>
        </div>
      </div>
      
    </div>
    )
    }
    