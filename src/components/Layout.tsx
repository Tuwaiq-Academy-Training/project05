import { ReactElement } from 'react';
import { Catogry } from './Catogry';
import { Navbar } from './Navbar';
import { Navbarlogin } from './Navbarlogin';

interface LayoutProps{
	children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			{/* <Navbarlogin /> */}
			{children}
			
			
		</>
	);
}
export function LayoutProps1({ children }: LayoutProps) {
	return (
		<>
			
			<Navbarlogin />
			<Catogry/>
			{children}
			
		</>
	);
}
