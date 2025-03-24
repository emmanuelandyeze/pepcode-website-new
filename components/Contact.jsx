import Image from 'next/image';
import React from 'react';

const Contact = () => {
	return (
		<div className="max-w-[349px] md:max-w-[1048px] mx-auto py-10 md:py-20 px-0 md:px-0">
			<div className="flex flex-col md:flex-row md:gap-[112px] md:items-center">
				{/* Left Section */}
				<div className='flex flex-col items-start'>
					<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400] mb-2">
						Have any enquiries?
					</p>
					<h2 className="md:text-[36px] text-[24px] text-[#48505E] font-[600] mb-4">
						Get in touch
					</h2>
					<Image
						src={'/images/6.jpg'}
						width={500}
						height={500}
						alt="Team collaboration"
						className="w-full md:w-[514px] hidden md:block md:h-[354px] object-cover rounded-[8px] shadow-md"
					/>
				</div>

				{/* Right Section (Form) */}
				<div className="bg-white md:w-[446px] w-full md:h-[462px] flex flex-col justify-center shadow-lg rounded-lg p-6 border border-[#00000040]">
					<form className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<input
								type="text"
								placeholder="First name"
								className="w-full border-[1px] border-[#667085] text-[#383E49] rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
							/>
							<input
								type="text"
								placeholder="Last name"
								className="w-full border border-[#667085] text-[#383E49] rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
							/>
						</div>
						<input
							type="email"
							placeholder="Email address"
							className="w-full border border-[#667085] text-[#383E49] rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
						/>
						<textarea
							rows="7"
							placeholder="Message"
							className="w-full border border-[#667085] text-[#383E49] rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
						></textarea>
						<button
							type="submit"
							className="w-full bg-[#004AAD] border border-[#667085] text-white font-medium py-[9px] px-[16px] rounded-md hover:bg-blue-700 transition"
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
