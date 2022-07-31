// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Login() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Login;
import { AiOutlineApple, AiFillGithub } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
export default function login() {
  return (
    <div className="sign-container">
      <div className="welcome-container">
        <h1>Welcome to DEV Community</h1>
        <p><a href="0">DEV Community</a> is a community of 883,563 amazing developers</p>
      </div>
      <div className="sign">
        <div className="apple"> <AiOutlineApple className="apple-icon" size={30}/>Sign up with Apple</div>
        <div className="githup"> <AiFillGithub className="githup-icon" size={30}/>Sign up with GitHup</div>
        <div className="twitter"> <FiTwitter className="twitter-icon" size={30}/>Sign up with Twitter</div>
        <div className="forem"><BsEmojiSmile className="forem-icon" size={25}/> Sign up with Forem</div>
       
        <div className="separator">
  <div className="line"></div>
  <p>OR</p>
  <div className="line"></div>
</div>
      </div>
    </div>
  )
}

