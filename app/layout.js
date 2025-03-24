import Navbar from '@/components/Navbar';
import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';
import Footer from '@/components/Footer';

const hankenGrotesk = Hanken_Grotesk({
	subsets: ['latin'],
	variable: '--font-hanken',
	display: 'swap',
});

export const metadata = {
	title: 'Pepcode Inc.',
	description:
		'Simplify your business finances with Pepcode',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={hankenGrotesk.variable}>
			<body className="font-sans">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
