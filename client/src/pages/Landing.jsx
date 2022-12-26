import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Landing() {
	return (
		<div>
			<div className="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-slate-200">
				<Hero />

				<Footer />
			</div>
		</div>
	);
}
