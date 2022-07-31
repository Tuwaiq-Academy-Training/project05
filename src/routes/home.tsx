// import './styles/index.css';
import { Posts } from '../components/Posts';
import { Catogry } from '../components/Catogry';
import { Navbarlogin } from '../components/Navbarlogin';

export function HomePage() {
	return ( <>
	<div>
        <div >
		<Navbarlogin></Navbarlogin>

        </div>
		<div >
        <Catogry></Catogry>
			<Posts></Posts>

		</div>

	</div>
	</>
		
	);
}
