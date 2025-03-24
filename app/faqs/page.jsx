'use client'

import { useState } from 'react';

const faqs = [
	{
		question: 'What is Pepcode?',
		answer:
			'PEPCODE is a two-layer bookkeeping software designed to simplify financial management for businesses. The first layer allows users to perform everyday tasks like invoicing, tracking expenses, managing inventory, and checking bank balances. The second layer is dedicated to in-house bookkeepers who handle advanced tasks such as detailed financial reporting, management accounts, profit and loss statements, and other complex accounting functions. PEPCODE is designed to streamline both basic and advanced accounting needs in one platform.',
	},
	{
		question: 'How can Pepcode benefit my business?',
		answer:
			'Pepcode simplifies your bookkeeping and accounting tasks, allowing you to allocate more time and resources to your core business activities. It ensures efficiency, compliance, and informed decision-making.',
	},
	{
		question: 'Is Pepcode suitable for small businesses?',
		answer:
			'Absolutely! Pepcode is tailored to meet the needs of small and medium-sized enterprises, helping them enhance efficiency, reduce administrative burdens, and grow.',
	},
	{
		question:
			'Can Pepcode handle accounting for various industries?',
		answer:
			'Yes, Pepcode’s solutions are tailored to meet the unique needs of different industries across Africa.',
	},
	{
		question: 'How does Pepcode ensure data security?',
		answer:
			'We prioritize the security of your data, implementing robust measures to safeguard your financial and operational information.',
	},
	{
		question:
			'Can Pepcode integrate with other business tools?',
		answer:
			'Yes, Pepcode offers data integration tools and services, allowing seamless integration with various data sources, such as bank accounts and POS systems.',
	},
	{
		question:
			'How does Pepcode assist with compliance and reporting?',
		answer:
			'Our software assists in ensuring businesses comply with tax regulations and generate required bookkeeping and accounting reports.',
	},
	{
		question: 'Is there a trial period for Pepcode?',
		answer:
			'Yes, we offer a free trial period for each pricing tier, so you can explore our services risk-free.',
	},
	{
		question:
			'What payment methods are accepted for Pepcode subscriptions?',
		answer:
			'We accept various payment methods, including credit cards, digital wallets, and bank transfers.',
	},
];

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="pb-20">
			<div className="bg-[#0047BB] py-20 md:py-30 px-4">
				<div className="max-w-4xl pt-10  text-white mx-auto text-center">
					<h2 className="text-3xl font-bold">
						Frequently asked questions
					</h2>
					<p className="text-sm mt-2">
						Find answers to common questions about our
						services, features, and support
					</p>
				</div>
			</div>

			<div className="max-w-4xl mx-auto mt-8 bg-white text-black p-6">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border-b last:border-none"
					>
						<button
							className="w-full text-left py-4 flex justify-between items-center font-medium focus:outline-none"
							onClick={() => toggleFAQ(index)}
						>
							<span>{faq.question}</span>
							<span className="text-xl">
								{openIndex === index ? '−' : '+'}
							</span>
						</button>
						{openIndex === index && (
							<p className="text-gray-600 pb-4">
								{faq.answer}
							</p>
						)}
					</div>
				))}
			</div>

			<p className="text-center mt-6">
				Have additional questions? Send us an email at{' '}
				<a
					href="mailto:support@pepcode.com"
					className="text-blue-300 underline"
				>
					support@pepcode.com
				</a>
			</p>
		</section>
	);
};

export default FAQSection;
