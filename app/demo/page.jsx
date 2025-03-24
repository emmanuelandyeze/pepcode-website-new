'use client';

import Image from "next/image";

const Demo = () => {
	return (
		<section className="pb-20">
			<div className="bg-[#0047BB] py-20 md:py-30 px-4">
				<div className="max-w-4xl pt-10  text-white mx-auto text-center">
					<h2 className="text-3xl font-bold">
						Request a demo
					</h2>
					<p className="text-sm mt-2">
						Smart bookkeeping, made simple. Try a free demo
						today
					</p>
				</div>
			</div>

			<div className="max-w-5xl mx-auto mt-8 bg-white text-black p-6">
				<div className="flex flex-col md:flex-row md:gap-[112px] md:items-center">
					{/* Left Section */}
					<div className="flex flex-col items-start">
						<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400] mb-2">
							Want a demo?
						</p>
						<h2 className="md:text-[36px] text-[24px] text-[#48505E] font-[600] mb-4">
							We have you covered
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
		</section>
	);
};

export default Demo;
