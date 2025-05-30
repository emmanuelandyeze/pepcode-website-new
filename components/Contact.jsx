import Image from 'next/image';
import React from 'react';

const Contact = () => {
	return (
		<div className="max-w-[349px] md:max-w-[1048px] mx-auto py-10 md:py-20 px-0 md:px-0">
			<div className="flex flex-col md:flex-row md:gap-[112px] md:items-center">
				{/* Left Section */}
				<div className="flex flex-col items-start">
					
					<Image
						src={'/images/6.jpg'}
						width={500}
						height={500}
						alt="Team collaboration"
						className="w-full md:w-[514px] mb-4 md:mb-0 md:h-[354px] object-cover rounded-[8px] shadow-md"
					/>
				</div>

				{/* Right Section (Form) */}
				<div className="bg-white md:w-[552px] w-full md:h-[462px] flex flex-col justify-center">
					<div>
						<h1 className="text-[24px] md:text-[32px] font-[600] text-[#0C111D] mb-4">
							Unlock seamless bookkeeping with{' '}
							<span className="text-[#004AAD]">
								Pepcode
							</span>
						</h1>
						<div>
							<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400]">
								Whether you're ready to streamline your
								finances or just have a few questions, we're
								here to help.
							</p>
							<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400] mb-4">
								Let’s talk about how Pepcode can make
								bookkeeping effortless for your business
							</p>
						</div>
						<a
							href="https://forms.gle/heEfSvYWxCviNQ138"
							target="_blank"
							className="bg-[#004AAD] mt-4 flex items-center justify-center cursor-pointer text-[14px] md:text-[16px] font-[500] text-white px-[20px] py-[12px] rounded-[4px] w-[100%] md:w-[190px] md:h-[48px]"
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
