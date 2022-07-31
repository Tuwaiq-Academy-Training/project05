import { AiFillApple, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Login(){
    return <>
    <div className="login">
    <h1>Welcome to DEV Community</h1>
    <p>DEV Community is a community of 896,537 amazing developers</p>
    <div className="login-opt black"><AiFillApple /> Continue with Apple</div>
    <div className="login-opt forem">Continue with Forem</div>
    <div className="login-opt github"><AiFillGithub />Continue with GitHub</div>
    <div className="login-opt twitter"><AiOutlineTwitter />Continue with Twitter</div>
    <p>Have a password? Continue with your email address</p>
    <h4>Email</h4>
    <input type="text" />
    <h4>Password</h4>
    <input type="text" />
    <div><input type="checkbox" />Remember me</div>
    <Link to={'/loggedin'}><div className="login-opt continue">Continue</div></Link>
    <p className="blue">I forgot my password</p>
    </div>
    </>
}