import { ReactElement } from 'react';
import Footer from './footer';
import Navbar from './Navbar';
import { Sidnav } from './sidbar';




interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
			< Navbar/>
            <Sidnav/>
			{children}
			<Footer/>
		</>
	);
}