import { ReactElement } from 'react';
// import { Footer } from './Footer';
import { Navbar } from './Navbar';
import{Sidenav} from './Sidenav';

interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<Sidenav/>
			{children}
			{/* <Footer /> */}
		</>
	);
}
