
export function Login() {

	return (

       

    <form action="#">
   <div className ="container">
    <div>
   
      <h2>Welcome to DEV Community</h2><br /><br />
        <label htmlFor="Email"><b>Username</b> </label><br />
        <input type="email" placeholder="Enter email" name="uname" required />
        </div>

        <div>
        <label htmlFor="psw"><b>Password</b> </label><br />
        <input type="password" placeholder="Enter Password" name="psw" required />
        </div>

        <div>
                <label>
          <input type="checkbox"  name="remember"/> Remember me
        </label>
        </div>

        <div>
        <button className="buttonlog"type="submit">Contnue</button>
        <span className ="psw">Forgot <a href="#">password?</a></span>

        </div>
 

        </div>
    </form>

    

	)
}