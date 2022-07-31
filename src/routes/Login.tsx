import { Login } from "../components/Login";
import { Nav } from "../components/Nav";

export function LoginPage() {
	return (
        <>
        <Nav />
       <div className="center">
	   <Login />
		</div>		
		</>
	);
}