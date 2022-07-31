import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImAppleinc } from "react-icons/im";
export function Register() {
    return (
        <div className="register">
            <h2> Welcome to DEV Community </h2>
            <div className="part-2">
            <a href="">DEV Community</a>
            <p> is a community of 884,723 amazing developers</p>
            </div>
            <div className="apple">  <ImAppleinc/> Continue with Apple</div>
            <div className="forem">  Continue with Forem</div>
            <div className="github">   <BsGithub/> Continue with GitHub</div>
            <div className="twitter">  < AiFillTwitterCircle/> Continue with Twitter</div>
            
            

        </div>
    )}