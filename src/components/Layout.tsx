import { ReactElement } from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Sidenav} from './sider';

interface LayoutProps {
	children: ReactElement;
}


export function Layout1({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			<Sidenav />
			{children}
			<Footer />
		</>
	);
}