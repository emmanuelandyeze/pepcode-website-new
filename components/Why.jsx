import React from 'react';

const features = [
	{
		title: 'Daily Expense Tracking',
		description: 'Easily log and categorize daily expenses',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.07 4.93L17.66 6.34C19.1586 7.84245 20.0001 9.87793 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.92 7.05 4.56 11 4.07V6.09C8.16 6.57 6 9.03 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 10.34 17.33 8.84 16.24 7.76L14.83 9.17C15.55 9.9 16 10.9 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 10.14 9.28 8.59 11 8.14V10.28C10.4 10.63 10 11.26 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V2H12C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.24 20.88 6.74 19.07 4.93Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
	{
		title: 'Invoice generation',
		description:
			'Create and send professional invoices in minutes',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 3H4V6H2V1H7V3ZM22 6V1H17V3H20V6H22ZM7 21H4V18H2V23H7V21ZM20 18V21H17V23H22V18H20ZM17 6H7V18H17V6ZM19 18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V6C5 4.9 5.9 4 7 4H17C18.1 4 19 4.9 19 6V18ZM15 8H9V10H15V8ZM15 11H9V13H15V11ZM15 14H9V16H15V14Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
	{
		title: 'Expert bookkeeping',
		description:
			'Access detailed financial reports and insights prepared by certified bookkeepers',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
					fill="#004AAD"
				/>
				<path
					d="M17.5 10.5C18.38 10.5 19.23 10.59 20 10.76V9.24C19.21 9.09 18.36 9 17.5 9C15.8 9 14.26 9.29 13 9.83V11.49C14.13 10.85 15.7 10.5 17.5 10.5ZM13 12.49V14.15C14.13 13.51 15.7 13.16 17.5 13.16C18.38 13.16 19.23 13.25 20 13.42V11.9C19.21 11.75 18.36 11.66 17.5 11.66C15.8 11.66 14.26 11.96 13 12.49ZM17.5 14.33C15.8 14.33 14.26 14.62 13 15.16V16.82C14.13 16.18 15.7 15.83 17.5 15.83C18.38 15.83 19.23 15.92 20 16.09V14.57C19.21 14.41 18.36 14.33 17.5 14.33Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
	{
		title: 'Inventory management',
		description: 'Keep track of stock levels in real-time',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
					fill="#004AAD"
				/>
				<path
					d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
	{
		title: 'Seamless communication',
		description:
			'Message your bookkeeper directly through the platform',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
	{
		title: 'Budgeting tools',
		description:
			'Plan and manage your business finances effectively',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H3V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V16H8V5H19V19Z"
					fill="#004AAD"
				/>
				<path
					d="M9 7H15V9H9V7ZM16 7H18V9H16V7ZM9 10H15V12H9V10ZM16 10H18V12H16V10Z"
					fill="#004AAD"
				/>
			</svg>
		),
	},
];

const Why = () => {
    return (
			<div className="bg-[#EDF2F499] py-5">
				<div className="max-w-[349px] md:max-w-[1070px] mx-auto text-left md:text-center py-10">
					<h2 className="md:text-[32px] text-[24px] font-[600] mb-8 text-[#0C111D]">
						Why choose{' '}
						<span className="text-[#004AAD]">Pepcode?</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex flex-col items-start p-4 w-full md:w-[328px] h-[169px] justify-center bg-white border-[1px] border-[#E4E4E4] rounded-[12px]"
							>
								<div className="text-blue-600 mb-2 border-[1px] border-[#E4E4E4] p-3 rounded-full">
									{feature.icon}
								</div>
								<h3 className="font-[500] text-left text-[#383E49] text-[16px]">
									{feature.title}
								</h3>
								<p className="text-[#48505E] text-left font-[400] text-[14px]">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
};

export default Why;
