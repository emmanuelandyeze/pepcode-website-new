import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className=" max-w-[349px] md:max-w-[1048px] mx-auto overflow-hidden py-10 md:py-20 bg-[#fff] justify-center items-center">
			<div className="flex flex-col md:flex-row md:justify-between">
				<div>
					<h1 className="md:text-[32px] text-[24px] font-[600] text-[#0C111D]">
						About{' '}
						<span className="text-[#004AAD]">Pepcode</span>
					</h1>
					<p className="text-[#48505E] text-[14px] md:text-[18px] font-[400] mt-4">
						Pepcode is a two-layer bookkeeping solution
						designed for MSMEs
					</p>
					<div className="flex flex-col gap-[21px] mt-10">
						<div className="bg-[#F6FFF6] p-[12px] rounded-[4px] w-full gap-[8px] flex flex-col md:w-[500px]">
							<h1 className="text-[#383E49] text-[16px] md:text-[20px] font-[600]">
								Simple layer
							</h1>
							<p className="text-[#383E49] text-[14px] md:text-[16px] font-[400]">
								Helps our users with daily recording of
								expenses, inventory, and invoices
							</p>
						</div>
						<div className="bg-[#FEF1FF] p-[12px] rounded-[4px] w-full gap-[8px] flex flex-col md:w-[500px]">
							<h1 className="text-[#383E49] text-[16px] md:text-[20px] font-[600]">
								Advanced layer
							</h1>
							<p className="text-[#383E49] text-[14px] md:text-[16px] font-[400]">
								Detailed financial records (management
								accounts, general ledger, budgeting) handled
								by our expert bookkeepers
							</p>
						</div>
					</div>
				</div>
				<div className="border-[1px] border-[#D9D9D9] hidden md:block rounded-[24px] w-[280px] pt-[18px] px-[12px] mt-10">
					<div className="flex flex-row gap-[4px]">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 4.06999V2.04999C8.98999 2.24999 7.15999 3.04999 5.67999 4.25999L7.09999 5.68999C8.22994 4.80788 9.5776 4.24808 11 4.06999ZM18.32 4.25999C16.8034 3.0148 14.9525 2.24589 13 2.04999V4.06999C14.46 4.24999 15.79 4.82999 16.9 5.68999L18.32 4.25999ZM19.93 11H21.95C21.75 8.98999 20.95 7.15999 19.74 5.67999L18.31 7.09999C19.1921 8.22994 19.7519 9.5776 19.93 11ZM5.68999 7.09999L4.25999 5.67999C3.0148 7.19657 2.24589 9.04751 2.04999 11H4.06999C4.24999 9.53999 4.82999 8.20999 5.68999 7.09999ZM4.06999 13H2.04999C2.24999 15.01 3.04999 16.84 4.25999 18.32L5.68999 16.89C4.80635 15.7647 4.24626 14.4198 4.06999 13ZM15 12C15 10.34 13.66 8.99999 12 8.99999C10.34 8.99999 8.99999 10.34 8.99999 12C8.99999 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12ZM18.31 16.9L19.74 18.33C20.9835 16.8124 21.7522 14.962 21.95 13.01H19.93C19.75 14.4288 19.1903 15.7728 18.31 16.9ZM13 19.93V21.95C15.01 21.75 16.84 20.95 18.32 19.74L16.89 18.31C15.79 19.17 14.46 19.75 13 19.93ZM5.67999 19.74C7.19756 20.9835 9.04799 21.7522 11 21.95V19.93C9.5776 19.7519 8.22994 19.1921 7.09999 18.31L5.67999 19.74Z"
								fill="#383E49"
							/>
						</svg>
						<div>
							<h1 className="text-[#383E49] font-[500] text-[14px]">
								Inventory management
							</h1>
							<p className="text-[#48505E] text-[14px] font-[400] mt-2 w-[203px]">
								All your bookkeeping solutions in one place
							</p>
						</div>
					</div>
					<div className="mt-5">
						<div className="flex flex-row justify-between border-b-[1px] border-b-[#E4E4E4] py-2 items-center">
							<div className="flex flex-row gap-[8px] items-center">
								<Image
									src={'/images/1.jpg'}
									width={50}
									height={50}
									className="w-[31px] h-[31px] rounded-full object-cover"
								/>
								<p className="text-[#383E49] text-[12px] font-[500]">
									Micheal John
								</p>
							</div>
							<p className="text-[#005F0B] text-[10px] font-[400]">
								Subscribed
							</p>
						</div>
						<div className="flex flex-row justify-between border-b-[1px] border-b-[#E4E4E4] py-2 items-center">
							<div className="flex flex-row gap-[8px] items-center">
								<Image
									src={'/images/2.jpg'}
									width={50}
									height={50}
									className="w-[31px] h-[31px] rounded-full object-cover"
								/>
								<p className="text-[#383E49] text-[12px] font-[500]">
									Shola Emmanuel
								</p>
							</div>
							<p className="text-[#005F0B] text-[10px] font-[400]">
								Subscribed
							</p>
						</div>
						<div className="flex flex-row justify-between border-b-[1px] border-b-[#E4E4E4] py-2 items-center">
							<div className="flex flex-row gap-[8px] items-center">
								<Image
									src={'/images/3.jpg'}
									width={50}
									height={50}
									className="w-[31px] h-[31px] rounded-full object-cover"
								/>
								<p className="text-[#383E49] text-[12px] font-[500]">
									Damian Samuel
								</p>
							</div>
							<p className="text-[#005F0B] text-[10px] font-[400]">
								Subscribed
							</p>
						</div>
						<div className="flex flex-row justify-between border-b-[1px] border-b-[#E4E4E4] py-2 items-center">
							<div className="flex flex-row gap-[8px] items-center">
								<Image
									src={'/images/4.jpg'}
									width={50}
									height={50}
									className="w-[31px] h-[31px] rounded-full object-cover"
								/>
								<p className="text-[#383E49] text-[12px] font-[500]">
									Esther Josephine
								</p>
							</div>
							<p className="text-[#005F0B] text-[10px] font-[400]">
								Subscribed
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
