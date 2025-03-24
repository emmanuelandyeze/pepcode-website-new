import Image from 'next/image';
import React from 'react'

const Landing = () => {
  return (
		<div className="md:h-[100vh] h-[70vh] overflow-hidden md:pt-30 pt-20 bg-[#EDF2F499] justify-center items-center">
			<h1 className="md:text-center text-left mx-auto text-[#0C111D] font-[700] md:font-[600] text-[20px] md:text-[32px] px-5 md:px-0 md:max-w-[1048px]">
				Simplify your business finances with{' '}
				<span className="text-[#004AAD]">Pepcode</span> –
				daily bookkeeping made easy for MSMEs
			</h1>
			<p className="md:text-center text-left text-[#48505E] px-5 md:px-0 font-[400] text-[14px] md:text-[16px] mt-[10px] md:mt-4">
				With pepcode, you can track expenses, manage
				inventory, and generate invoices effortlessly
			</p>
			<div className="justify-center items-center flex flex-col md:flex-row gap-[15px] px-5 md:px-0 mt-10 md:mt-10">
				<a
					href="https://app.pepcodeinc.com/signup"
					target="_blank"
					className="bg-[#004AAD] flex items-center justify-center cursor-pointer text-[14px] md:text-[16px] font-[500] text-white px-[20px] py-[12px] rounded-[4px] w-[100%] md:w-[190px] md:h-[48px]"
				>
					Get Started today
				</a>
				<a
					href="/demo"
					className="px-[20px] flex items-center justify-center py-[12px] cursor-pointer text-[14px] md:text-[16px] font-[500] rounded-[4px] w-[100%] md:w-[190px] md:h-[48px] text-[#004AAD] border-[1px] border-[#004AAD]"
				>
					Request a demo
				</a>
			</div>
			<div className="max-w-[805px] mx-auto mt-12 px-5 md:px-0">
				<Image
					src="/images/dashboard.png"
					alt="landing"
					className="shadow-sm rounded-xl"
					width={1048}
					height={600}
				/>
			</div>
		</div>
	);
}

export default Landing