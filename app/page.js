import About from '@/components/About';
import Contact from '@/components/Contact';
import HowItWorks from '@/components/HowItWorks';
import Landing from '@/components/Landing';
import Testimonials from '@/components/Testimonials';
import Why from '@/components/Why';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Landing />
			<About />
			<Why />
			<HowItWorks />
			<Testimonials />
			<Contact />
		</div>
	);
}
