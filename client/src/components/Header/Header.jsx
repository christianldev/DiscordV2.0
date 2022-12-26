import {Fragment, useState} from 'react';
import {Transition} from '@headlessui/react';
import {Link, useLocation} from 'react-router-dom';

import {useSelector} from 'react-redux';
import classNames from '../../utils/ClassesUtils';
import ApplicationLogo from '../ApplicationLogo';

export default function Header() {
	const location = useLocation();

	const [open, setOpen] = useState(false);
	const links = [
		{path: '/', title: 'Home'},
		{path: '/pricing', title: 'Pricing'},
		{path: '/contact', title: 'Contact'},
		{
			path: '/components',
			title: 'Components',
		},
	];
	function isCurrent(path) {
		return location.pathname === path;
	}
	const theme = useSelector((state) => {
		return state.theme?.value;
	});
	const authenticated = useSelector((state) => {
		return state.auth.authenticated;
	});

	return (
		<div>
			<div className="bg-white dark:bg-gray-900 pb-6">
				<div className="relative pt-6 z-40">
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<nav
							className="relative flex items-center justify-between sm:h-10 md:justify-center"
							aria-label="Global">
							<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									{/* Discord logo */}
									<ApplicationLogo
										height={60}
										width={140}
										color={'#fff'}
									/>

									<div className="-mr-1 flex items-center md:hidden">
										<div className="flex">
											<div className="inline-flex rounded-md space-x-2">
												<Link
													to={
														authenticated
															? '/home'
															: '/login'
													}
													className="inline-flex items-center px-2 py-2 border border-transparent text-sm font-medium rounded-full bg-white text-black">
													{!authenticated ? (
														<div>Iniciar sesion</div>
													) : (
														<div>Entrar</div>
													)}
												</Link>
											</div>
										</div>
										<button
											onClick={() => setOpen(!open)}
											type="button"
											className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
											id="main-menu"
											aria-haspopup="true">
											<span className="sr-only">
												Open main menu
											</span>
											<svg
												className="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="hidden md:flex space-x-2 sm:space-x-4 md:space-x-6">
								{links.map((link, idx) => {
									return (
										<Link
											key={idx}
											to={link.path}
											className={classNames(
												'text-sm leading-6 font-bold text-white focus:outline-none transition ease-in-out duration-150 px-3 py-1 rounded-sm',
												!isCurrent(link.path) &&
													'text-gray-500 hover:text-gray-700 dark:hover:text-white',
												isCurrent(link.path) &&
													'text-gray-900 dark:text-white'
											)}>
											{link.title}
										</Link>
									);
								})}
							</div>
							<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 z-40">
								<span className="inline-flex rounded-md shadow">
									<Link
										to={authenticated ? '/home' : '/login'}
										className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-full text-theme-600 dark:text-gray-700 bg-white dark:bg-purple-800 hover:bg-gray-50">
										{!authenticated ? (
											<div>Iniciar sesion</div>
										) : (
											<div>Entrar</div>
										)}
									</Link>
								</span>
							</div>
						</nav>
					</div>

					{/* Mobile menu */}
					<Transition
						show={open}
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
							<div className="rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										{(() => {
											if (theme === 'DARK') {
												return (
													// <img
													// 	alt="Icon"
													// 	className="h-8 w-auto sm:h-10"
													// 	src={IconDark}
													// />
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="h-8 w-auto sm:h-10">
														<path
															fillRule="evenodd"
															d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
															clipRule="evenodd"
														/>
														<path
															fillRule="evenodd"
															d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
															clipRule="evenodd"
														/>
													</svg>
												);
											} else {
												return (
													// <img
													// 	alt="Icon"
													// 	className="h-8 w-auto sm:h-10"
													// 	src={IconLight}
													// />
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-8 w-auto sm:h-10"
														viewBox="0 0 20 20"
														fill="currentColor">
														<path
															fillRule="evenodd"
															d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
															clipRule="evenodd"
														/>
														<path
															fillRule="evenodd"
															d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
															clipRule="evenodd"
														/>
													</svg>
												);
											}
										})()}
									</div>
									<div className="-mr-2">
										<button
											onClick={() => setOpen(!open)}
											type="button"
											className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
											<span className="sr-only">
												Close menu
											</span>
											{/* Heroicon name: x */}
											<svg
												className="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="main-menu">
									<div
										className="px-2 pt-2 pb-3"
										role="none">
										{links.map((link, idx) => {
											return (
												<Link
													key={idx}
													to={link.path}
													role="menuitem"
													className={classNames(
														'block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-slate-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-slate-800',
														isCurrent(link.path)
															? 'bg-slate-100 dark:bg-gray-900'
															: ''
													)}>
													{link.title}
												</Link>
											);
										})}
									</div>
									<div
										role="none"
										className="flex space-x-2 items-center">
										<Link
											to="/register"
											className="block w-full font-sm px-5 py-3 text-center font-medium text-gray-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800"
											role="menuitem">
											<div>Registrar</div>
										</Link>
										<Link
											to="/login"
											className="block w-full font-sm px-5 py-3 text-center font-medium text-gray-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-800"
											role="menuitem">
											<div>Iniciar sesión</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	);
}
