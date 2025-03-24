'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu & close

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Toggle sidebar
	const toggleMenu = () => setIsOpen(!isOpen);

	// Handle scrolling effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) setScrolled(true);
			else setScrolled(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () =>
			window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50  ${
				scrolled
					? 'bg-[#f0f4f6] backdrop-blur-md'
					: 'bg-[#f0f4f6]'
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
						className="w-full h-[1.7rem] md:w-full md:h-[2.5rem]"
					/>
				</a>

				{/* Desktop Nav */}
				<div className="hidden md:flex space-x-8">
					<a
						href="/pricing"
						className="text-[#48505E] text-[16px] font-[400] cursor-pointer hover:text-[#004AAD]"
					>
						Pricing
					</a>
					<a
						href="/faqs"
						className="text-[#48505E] text-[16px] font-[400] cursor-pointer hover:text-[#004AAD]"
					>
						FAQ
					</a>
				</div>

				{/* Buttons */}
				<div className="hidden md:flex space-x-4">
					<a
						href="/login"
						className="px-4 py-2 text-[16px] font-[500] w-[110px] text-center text-[#004AAD]"
					>
						Sign up
					</a>
					<a
						href="/signup"
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
						href="/login"
						className="text-[14px] text-[#48505E] font-[400] hover:text-black w-full pb-3 border-b border-gray-300"
					>
						Login
					</a>

					<a
						href="/signup"
						className="text-[14px] text-[#48505E] font-[400] hover:text-black w-full pb-3 border-b border-gray-300"
					>
						Sign Up
					</a>

					<a
						href="/pricing"
						className="text-[14px] text-[#48505E] font-[400] hover:text-black w-full pb-3 border-b border-gray-300"
					>
						Pricing
					</a>

					<a
						href="/faqs"
						className="text-[14px] text-[#48505E] font-[400] hover:text-black w-full pb-3 border-b border-gray-300"
					>
						FAQ
					</a>
				</div>
			</div>
		</nav>
	);
}
