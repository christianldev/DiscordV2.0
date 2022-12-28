import React from 'react';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../redux/reducers/authReducer';
import store from '../../redux/store';
import UserUtils from '../../utils/UserUtils';
import {RiLogoutBoxRLine} from 'react-icons/ri';

const ProfileCardMenu = () => {
	const navigate = useNavigate();

	const signOut = () => {
		store.dispatch(logout());
		UserUtils.loggedOut(navigate);
	};

	return (
		<div className="break-inside p-6 flex flex-col justify-between rounded-xl mb-4  bg-[#212226] text-white">
			<div className="space-y-4">
				<div className="flex items-center flex-col justify-center text-center space-y-4">
					<img
						className="flex-none w-20 h-20 rounded-full ring-4 ring-[#4A3FE4] border-4 border-black object-cover"
						src="https://randomuser.me/api/portraits/women/55.jpg"
						alt="avatar"
					/>
					<div className="text-center">
						<a href="#" className="text-lg font-bold block">
							Monica De Armas
						</a>
						<span className="text-slate-100">
							Dog Trainer 🐶
						</span>
					</div>
				</div>
				<div className="space-y-4 text-center">
					<h4 className="text-2xl font-extrabold leading-snug text-slate-500 dark:text-white">
						Web Design templates Selection
					</h4>
					{/* <p>
						Minim dolor in amet nulla laboris enim dolore
						consequ.
					</p> */}
					<button
						onClick={signOut}
						className="py-2 px-4 font-bold rounded-full text-white bg-gradient-to-tr 
							from-[#4A3FE4] to-[#500ca8] hover:shadow-2xl">
						Cerrar sesión
						<RiLogoutBoxRLine className="inline-block h-5 w-5 ml-2" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileCardMenu;
