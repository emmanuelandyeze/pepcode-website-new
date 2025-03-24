const Pricing = () => {
	const plans = [
		{
			name: 'Basic plan',
			description:
				'Suitable for solo entrepreneurs or small businesses',
			price: '₦5,000',
			users: 'Only 1 user',
			transactions: 'Maximum no of transactions - 50',
			sku: 'Maximum of 10 store keeping units (SKU)',
			features: [
				'Key financial metrics',
				'Expenses tracking',
				'Invoice management',
				'Inventory tracking',
				'Bank balance tracking',
			],
		},
		{
			name: 'Team plan',
			description:
				'Ideal for small teams who need seamless collaboration on bookkeeping',
			price: '₦10,000',
			users: 'Maximum of 3 users',
			transactions: 'Maximum no of transactions - 150',
			sku: 'Maximum of 20 store keeping units (SKU)',
			features: [
				'Key financial metrics',
				'Expenses tracking',
				'Invoice management',
				'Inventory tracking',
				'Bank balance tracking',
			],
		},
		{
			name: 'Business plan',
			description:
				'Designed for growing businesses that require advanced bookkeeping for multiple users',
			price: '₦20,000',
			users: '5 users or more',
			transactions:
				'Maximum no of transactions - Unlimited',
			sku: 'Unlimited store keeping units (SKU)',
			features: [
				'Advanced key financial metrics',
				'Advanced expenses tracking',
				'Advanced invoice management',
				'Advanced inventory tracking',
				'Advanced bank balance tracking',
			],
		},
	];

	return (
		<section className=" pb-20">
			<div className="bg-[#0047BB] py-20 md:py-30 px-4">
				<div className="max-w-5xl pt-10  text-white mx-auto text-center">
					<h2 className="text-[40px] font-[600]">
						Pricing
					</h2>
					<p className="text-[18px] mt-2">
						Simple, transparent pricing with no hidden fees.
						Choose the plan that fits your business needs
					</p>
				</div>
			</div>

			<div className="max-w-6xl px-5 md:px-0 mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
				{plans.map((plan, index) => (
					<div
						key={index}
						className="bg-white text-black rounded-[12px] border border-[#E4E4E4] p-6"
					>
						<h3 className="text-[28px] font-[500] text-[#004AAD]">
							{plan.name}
						</h3>
						<p className="text-[16px] text-[#48505E] font-[400]">
							{plan.description}
						</p>
						<p className="text-[48px] text-[#475467] font-bold mt-4">
							{plan.price}
							<span className="text-[16px] text-[#475467] font-[400]">
								/month
							</span>
						</p>
						<button className="bg-[#004AAD] hover:bg-[#004AAD] text-white font-semibold py-[12px] px-4 rounded-md w-full mt-4">
							Start free trial
						</button>
						<ul className="mt-6 space-y-2 text-sm">
							<li className="flex flex-row items-center">
								<div className="border-[1px] border-[#E4E4E4] flex justify-center items-center h-[28.4px] w-[28.4px] mr-2 rounded-full">
									<svg
										width="19"
										height="19"
										viewBox="0 0 19 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											width="17.4784"
											height="17.4784"
											transform="translate(0.826172 0.624939)"
											fill="white"
										/>
										<path
											d="M7.38055 12.4229L4.32182 9.36417L3.30225 10.3837L7.38055 14.462L16.1198 5.72282L15.1002 4.70325L7.38055 12.4229Z"
											fill="#0D6200"
										/>
									</svg>
								</div>{' '}
								<p className="text-[#475467] font-[700] text-[18px]">
									{plan.users}
								</p>
							</li>
							<li className="flex flex-row items-center">
								<div className="border-[1px] border-[#E4E4E4] flex justify-center items-center h-[28.4px] w-[28.4px] mr-2 rounded-full">
									<svg
										width="19"
										height="19"
										viewBox="0 0 19 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											width="17.4784"
											height="17.4784"
											transform="translate(0.826172 0.624939)"
											fill="white"
										/>
										<path
											d="M7.38055 12.4229L4.32182 9.36417L3.30225 10.3837L7.38055 14.462L16.1198 5.72282L15.1002 4.70325L7.38055 12.4229Z"
											fill="#0D6200"
										/>
									</svg>
								</div>{' '}
								<p className="text-[#475467] font-[400] text-[16px]">
									{plan.transactions}
								</p>
							</li>
							<li className="flex flex-row items-center">
								<div className="border-[1px] border-[#E4E4E4] flex justify-center items-center h-[28.4px] w-[28.4px] mr-2 rounded-full">
									<svg
										width="19"
										height="19"
										viewBox="0 0 19 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											width="17.4784"
											height="17.4784"
											transform="translate(0.826172 0.624939)"
											fill="white"
										/>
										<path
											d="M7.38055 12.4229L4.32182 9.36417L3.30225 10.3837L7.38055 14.462L16.1198 5.72282L15.1002 4.70325L7.38055 12.4229Z"
											fill="#0D6200"
										/>
									</svg>
								</div>{' '}
								<p className="text-[#475467] font-[400] text-[16px]">
									{plan.sku}
								</p>
							</li>

							{plan.features.map((feature, i) => (
								<li
									key={i}
									className="flex flex-row items-center"
								>
									<div className="border-[1px] border-[#E4E4E4] flex justify-center items-center h-[28.4px] w-[28.4px] mr-2 rounded-full">
										<svg
											width="19"
											height="19"
											viewBox="0 0 19 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												width="17.4784"
												height="17.4784"
												transform="translate(0.826172 0.624939)"
												fill="white"
											/>
											<path
												d="M7.38055 12.4229L4.32182 9.36417L3.30225 10.3837L7.38055 14.462L16.1198 5.72282L15.1002 4.70325L7.38055 12.4229Z"
												fill="#0D6200"
											/>
										</svg>
									</div>{' '}
									<p className="text-[#475467] font-[400] text-[16px]">
										{feature}
									</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default Pricing;
