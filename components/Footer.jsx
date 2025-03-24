import Image from 'next/image';
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-[#EDF2F499] text-gray-700 py-8 px-6">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start md:text-left">
				{/* Logo */}
				<div className="mb-6 md:mb-0">
					<a href="/" className="text-2xl font-bold">
						<Image
							src="/images/logo.png"
							width={200}
							height={200}
							alt="Logo"
							className="w-full h-[1.7rem] md:w-full md:h-[2.5rem]"
						/>
					</a>
				</div>

				{/* Product Links */}
				<div className="mb-6 md:mb-0">
					<h3 className="font-semibold">Product</h3>
					<ul className="text-sm space-y-1">
						<li>
							<a href="#" className="hover:underline">
								Pricing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								FAQ
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div className="mb-6 md:mb-0 ">
					<h3 className="font-semibold">Contact</h3>
					<ul className="text-sm space-y-1">
						<li>Support@pepcode.com</li>
						<li>8 Rock Drive Lekki Phase One, Lagos</li>
						<li>+234 8024247865</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="font-semibold">Social media</h3>
					<div className="flex justify-center md:justify-start space-x-4 mt-2 text-gray-600">
						<a href="#" className="hover:text-blue-700">
							<FaInstagram size={18} />
						</a>
						<a href="#" className="hover:text-blue-700">
							<FaFacebook size={18} />
						</a>
						<a href="#" className="hover:text-blue-700">
							<FaTwitter size={18} />
						</a>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center text-sm mt-6 text-gray-500">
				© 2025 pepcode Inc. All Rights Reserved.{' '}
				<a
					href="#"
					className="text-blue-700 hover:underline"
				>
					Powered by Ploutos
				</a>
			</div>
		</footer>
	);
};

export default Footer;
