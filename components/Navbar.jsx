'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Toggle sidebar
	const toggleMenu = () => setIsOpen(!isOpen);

	// Handle scrolling effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 5);
		};
		window.addEventListener('scroll', handleScroll);
		return () =>
			window.removeEventListener('scroll', handleScroll);
	}, []);

	// Check if link is active
	const isActive = (path) => pathname === path;

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/60 backdrop-blur-lg'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<a href="/" className="text-2xl font-bold">
					<Image
						src="/images/logo.png"
						width={200}
						height={200}
						alt="Logo"
						className="w-full h-[1.5rem] md:w-full md:h-[2.5rem]"
					/>
				</a>

				{/* Desktop Nav */}
				<div className="hidden md:flex space-x-8">
					<a
						href="/pricing"
						className={`text-[16px] font-[400] cursor-pointer hover:text-[#004AAD] ${
							isActive('/pricing')
								? 'text-[#004AAD] pb-1'
								: 'text-[#48505E]'
						}`}
					>
						Pricing
					</a>
					<a
						href="/faqs"
						className={`text-[16px] font-[400] cursor-pointer hover:text-[#004AAD] ${
							isActive('/faqs')
								? 'text-[#004AAD] pb-1'
								: 'text-[#48505E]'
						}`}
					>
						FAQ
					</a>
				</div>

				{/* Buttons */}
				<div className="hidden md:flex space-x-4">
					<a
						href="https://app.pepcodeinc.com/signup"
						target="_blank"
						className="px-4 py-2 text-[16px] font-[500] w-[110px] text-center text-[#004AAD]"
					>
						Sign up
					</a>
					<a
						href="https://app.pepcodeinc.com/login"
						target="_blank"
						className="px-[16px] py-[10px] bg-[#004AAD] text-[16px] w-[110px] text-center font-[500] text-white rounded-[4px] hover:bg-[#004AAD]"
					>
						Log in
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="md:hidden text-2xl"
				>
					{isOpen ? <FiX /> : <FiMenu color="#48505E" />}
				</button>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`fixed inset-y-0 right-0 w-64 z-50 bg-white shadow-lg transform ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 md:hidden`}
			>
				<button
					onClick={toggleMenu}
					className="absolute top-5 right-5 text-2xl"
				>
					<FiX />
				</button>
				<div className="pt-16 h-[100vh] flex flex-col z-50 bg-[#fff] shadow-lg border-[1px] border-gray-300 items-start px-10 space-y-4 w-full">
					<a
						href="https://app.pepcodeinc.com/login"
						target="_blank"
						className={`text-[14px] font-[400] hover:text-black w-full pb-3 border-b border-gray-300 ${
							isActive('/login')
								? 'text-[#004AAD] font-bold'
								: 'text-[#48505E]'
						}`}
					>
						Login
					</a>

					<a
						href="https://app.pepcodeinc.com/signup"
						target="_blank"
						className={`text-[14px] font-[400] hover:text-black w-full pb-3 border-b border-gray-300 ${
							isActive('/signup')
								? 'text-[#004AAD] font-bold'
								: 'text-[#48505E]'
						}`}
					>
						Sign Up
					</a>

					<a
						href="/pricing"
						className={`text-[14px] font-[400] hover:text-black w-full pb-3 border-b border-gray-300 ${
							isActive('/pricing')
								? 'text-[#004AAD] font-bold'
								: 'text-[#48505E]'
						}`}
					>
						Pricing
					</a>

					<a
						href="/faqs"
						className={`text-[14px] font-[400] hover:text-black w-full pb-3 border-b border-gray-300 ${
							isActive('/faqs')
								? 'text-[#004AAD] font-bold'
								: 'text-[#48505E]'
						}`}
					>
						FAQ
					</a>
				</div>
			</div>
		</nav>
	);
}
