import {Link} from 'react-router-dom';
import Header from '../Header';
import {RiDownload2Line} from 'react-icons/ri';

export default function Hero() {
	return (
		<div className="relative">
			<img
				src="/src/assets/img/login_bg.svg"
				alt="Hero"
				className="w-full absolute top-0 left-0 h-full object-cover"
			/>
			<Header />

			<div className="relative z-10 px-6 pt-16 md:pt-24 pb-16 md:pb-24 space-y-3">
				{/*
				discord logo
				*/}
				<h1 className="text-2xl md:text-4xl flex justify-center items-center font-extrabold text-white">
					Imagina un lugar
				</h1>

				<div className="relative z-10 pb-10 text-white text-sm text-center leading-normal md:leading-9">
					<p className=" max-w-2xl mx-auto">
						... en el que puedas formar parte de un club
						escolar, un grupo de jugadores o una comunidad
						mundial de arte. En el que puedas pasar tiempo
						con unos cuantos amigos. Un lugar que haga que
						hablar a diario y divertirte más a menudo sea
						fácil.
					</p>
				</div>

				<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
					<div>
						<Link
							to="/register"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-full bg-white text-black hover:bg-theme-900 md:py-4 md:text-sm md:px-10">
							<RiDownload2Line className="mr-2" />
							Descargar
						</Link>
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-3">
						<Link
							to="/contact"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-gray-50 md:py-4 md:text-sm md:px-6">
							Abrir en navegador
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
