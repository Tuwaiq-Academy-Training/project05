import { ReactElement } from 'react';
import { Navbar } from './Navbar';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { Posts } from './Posts';
import { Podcasts } from './Podcasts';



interface LayoutProps {
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>


        <Header />
		<Sidebar />
		< Posts />

		</>
	);
}
