import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../app/redux/user/userSlice";
import "./Login.css";

export function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (
      email === process.env.REACT_APP_EMAIL &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      dispatch(login());
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <h1>Welcome to DEV Community</h1>
        <p>DEV Community is a community of 883,369 amazing developers</p>
        <form onSubmit={handleSubmit}>
          <div className="login__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="continue" type="submit">Continue</button>
          {error && <span className="login__err">Wrong emai or password !</span>}
          <span className="login__forgot">I forgot my password</span>
        </form>
      </div>
    </div>
  );
};


