import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import 'react-dropdown/style.css';
import {useNavigate} from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import ApplicationLogo from '../components/ApplicationLogo';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import RegisterValidationScheme from '../helpers/RegisterValidationScheme';
import services from '../services';
import UserUtils from '../utils/UserUtils';
import {useToast} from '../hooks/useToast';
import {RiErrorWarningFill} from 'react-icons/ri';

function Register() {
	const navigate = useNavigate();
	const {add} = useToast();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(RegisterValidationScheme),
	});

	function sendRegistrationDetails(data) {
		setLoading(true);
		services.authentication
			.register(data)
			.then((response) => {
				UserUtils.logged(response, navigate);
			})
			.catch((error) => {
				add({
					icon: <RiErrorWarningFill />,
					type: 'error',
					message: (
						<div className="text-center">
							<h5 className="rounded-sm text-xs text-white">
								No se pudo registrar el usuario
							</h5>
						</div>
					),
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<div className="login__page">
			{/* 
			Dark Mode Toggle
			*/}

			<div className="flex justify-end">
				<DarkModeToggle />
			</div>

			<div className="login__content">
				<img
					src="/src/assets/img/login_bg.svg"
					className="absolute top-0 left-0 w-full h-full object-cover dark:brightness-75"
				/>
				<form
					onSubmit={handleSubmit(sendRegistrationDetails)}
					className="relative gap-y-5 p-8 rounded-lg grid bg-lightBlurColor dark:bg-blackBlurColor  justify-self-center sm:w-[386px] sm:justify-self-center md:w-[456px] md:justify-self-center lg:justify-self-center lg:mr-14 lg:gap-y-4 lg:p-5">
					<div>
						{/* Dicord logo*/}
						<ApplicationLogo
							height={40}
							width={160}
							color={'#7289da'}
						/>

						<p className="login__description dark:text-white flex justify-center items-center">
							Welcome! Please register to continue.
						</p>
					</div>
					<div>
						<div className="login__inputs">
							<div>
								<label
									htmlFor=""
									className="login__label dark:text-white">
									Username
								</label>
								<input
									type="text"
									placeholder="Username"
									className="login__input p-2"
									{...register('username')}
								/>
								{errors.username && ( // if there is an error
									<p className="text-red-500 text-xs">
										{errors.username.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor=""
									className="login__label dark:text-white">
									Email
								</label>
								<input
									type={'email'}
									placeholder="Email"
									className="login__input p-2"
									{...register('email')}
								/>
								{errors.email && ( // if there is an error
									<p className="text-red-500 text-xs">
										{errors.email.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor=""
									className="login__label dark:text-white">
									Password
								</label>
								<div className="login__box">
									<input
										type="password"
										placeholder="Password"
										className="login__input p-2"
										{...register('password')}
									/>
									{errors.password && ( // if there is an error
										<p className="text-red-500 text-xs">
											{errors.password.message}
										</p>
									)}
								</div>
							</div>
							<div>
								<label
									htmlFor=""
									className="login__label dark:text-white">
									Confirm Password
								</label>
								<div className="login__box">
									<input
										type={'password'}
										className="login__input p-2"
										placeholder="Confirm Password"
										{...register('confirmPassword')}
									/>
									{errors.confirmPassword && ( // if there is an error
										<p className="text-red-500 text-xs">
											Las contraseñas no coinciden
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex gap-3">
							<button className="login__button">
								{loading ? (
									<svg
										className="-ml-1 mr-3 h-5 w-5 animate-spin text-white flex justify-center items-center justify-self-center"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24">
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
								) : (
									'Registrarse'
								)}
							</button>
						</div>

						<div className="text-center">
							<p className="text-sm font-medium text-black dark:text-gray">
								Do you have an account?
							</p>
							<Link
								to="/login"
								className="text-sm font-medium text-firstColor hover:underline">
								Sign in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
