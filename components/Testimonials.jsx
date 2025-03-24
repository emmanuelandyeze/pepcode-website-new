const Testimonials = () => {
  const testimonials = [
		{
			text: 'Pepcode has completely changed how I manage my finances. I no longer stress about tracking expenses or balancing my book. Everything is automated and seamless.',
			name: 'Olayemi Omolola',
			role: 'Small business owner',
			image: '/images/7.jpg',
		},
		{
			text: 'As a freelancer, keeping track of my income and expenses used to be a nightmare. With Pepcode, I get clear insights into my finances, making tax season stress-free.',
			name: 'Charity Emmanuel',
			role: 'Freelance designer',
			image: '/images/8.jpg',
		},
		{
			text: 'Before Pepcode, we struggled with messy spreadsheets. Now, we have a clear, real-time view of our cash flow, helping us make better financial decisions.',
			name: 'Michael Enahoro',
			role: 'Startup founder',
			image: '/images/9.jpg',
		},
	];

  return (
		<section className="bg-[#004AAD] text-white py-10 md:py-20 px-4">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-[24px] text-left md:text-center md:text-[32px] font-[600] mb-8">
					What our clients say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white border-[1px] border-[#E4E4E4] h-[205px] md:h-[312px] md:w-[328px] justify-center items-start flex flex-col text-black rounded-[12px] px-6 py-4 md:p-6 shadow-lg"
						>
							<p className="text-[14px] md:text-[16px] text-[#48505E] mb-4 text-left">
								&ldquo;{testimonial.text}&rdquo;
							</p>
							<div className="flex items-center gap-3 md:mt-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-10 h-10 rounded-full object-cover"
								/>
								<div>
									<p className="text-[14px] md:text-[16px] text-[#383E49] text-left font-[500]">
										{testimonial.name}
									</p>
									<p className="text-[12px] md:text-[14px] text-[#48505E] text-left font-[400]">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
