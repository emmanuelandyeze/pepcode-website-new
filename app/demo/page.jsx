'use client';

import Image from "next/image";

const Demo = () => {
	return (
		<section className="pb-20">
			<div className="pt-14 md:pt-20"></div>
			<div className="bg-[#0047BB] pt-5 md:pt-5 pb-20 md:py-30 px-4">
				<div className="max-w-4xl pt-10  text-white mx-auto text-center">
					<h2 className="text-[24px] md:text-[40px] font-[600]">
						Request a demo
					</h2>
					<p className="text-[16px] md:text-[18px] mt-2">
						Smart bookkeeping, made simple. Try a free demo
						today
					</p>
				</div>
			</div>

			<div className="max-w-5xl mx-auto mt-8 bg-white text-black p-6">
				<div className="flex flex-col md:flex-row md:gap-[102px] md:items-center">
					{/* Left Section */}
					<div className="flex flex-col items-start">
						<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400] mb-2">
							Want a demo?
						</p>
						<h2 className="md:text-[36px] text-[24px] text-[#48505E] font-[600] mb-4">
							We have you covered
						</h2>
						<Image
							src={'/images/10.jpg'}
							width={500}
							height={500}
							alt="Team collaboration"
							className="w-full md:w-[514px] hidden md:block md:h-[354px] object-cover rounded-[8px] shadow-md"
						/>
					</div>

					{/* Right Section (Form) */}
					<div className="bg-white md:w-[552px] w-full md:h-[462px] flex flex-col justify-center">
						<div>
							<h1 className="text-[24px] md:text-[32px] font-[600] text-[#0C111D] mb-4">
								Unlock seamless bookkeeping with{' '}
								<span className="text-[#004AAD]">Pepcode</span>
							</h1>
							<div>
								<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400]">
									Whether you're ready to streamline your
									finances or just have a few questions,
									we're here to help.
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
		</section>
	);
};

export default Demo;
