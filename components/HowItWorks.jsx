import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
	return (
		<div className="max-w-[349px] md:max-w-4xl mx-auto text-left md:text-center py-10 md:py-20">
			<h2 className="md:text-[32px] text-[24px] mb-5 md:mb-10 font-[600] text-[#0C111D]">
				How <span className="text-[#004AAD]">Pepcode</span>{' '}
				works for your business
			</h2>

			<div className="flex flex-col md:flex-row h-[555px] md:h-[440px] items-center bg-white shadow-[#00000040] md:border-b-4 md:border-b-[#004AAD] shadow-lg rounded-[12px] overflow-hidden">
				{/* Left Section */}
				<div className="md:w-[295px] w-full h-full bg-gradient-to-b from-[#004AAD] to-[#EDF2F4] text-white p-6 flex flex-col justify-center">
					<h3 className="text-[20px] font-[400] text-[#FFFFFF] w-[193px] text-left mb-5 md:mb-10">
						Bookkeeping solution just got better
					</h3>
					<Image
						src={'/images/5.jpg'}
						alt="Bookkeeping illustration"
						width={500}
						height={500}
						className="md:w-[240px] w-full h-[157px] md:h-[211px] object-cover rounded-[12px]"
					/>
				</div>

				{/* Right Section */}
				<div className="md:w-1/2 w-full px-6 pt-6 p-10 text-left">
					<h3 className="text-[16px] md:text-[20px] md:w-[455px] text-[#48505E] font-[500] mb-5 md:mb-10">
						We've made your bookkeeping process way easier
					</h3>
					<ul className="space-y-[18px]">
						{[
							'Sign up and set up your account',
							'Use the simple layer to record daily transactions',
							'Access reports, insights, and messages anytime',
						].map((item, index) => (
							<li
								key={index}
								className="flex items-center md:text-[16px] text-[14px] text-[#48505E]"
							>
								<div className="border-[1px] border-[#E4E4E4] flex justify-center items-center h-[39px] w-[39px] mr-2 rounded-full">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											width="24"
											height="24"
											fill="white"
										/>
										<path
											d="M9.00002 16.2001L4.80002 12.0001L3.40002 13.4001L9.00002 19.0001L21 7.0001L19.6 5.6001L9.00002 16.2001Z"
											fill="#0D6200"
										/>
									</svg>
								</div>

								<p className='w-[90%]'>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
