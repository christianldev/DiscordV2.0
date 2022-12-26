import React from 'react';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../redux/reducers/authReducer';
import store from '../../redux/store';
import UserUtils from '../../utils/UserUtils';

const ProfileCardMenu = () => {
	const navigate = useNavigate();

	const signOut = () => {
		store.dispatch(logout());
		UserUtils.loggedOut(navigate);
	};

	return (
		<section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
			<div className="flex items-center justify-between">
				<span className="text-gray-400 text-sm">
					2d ago
				</span>
				<span className="text-emerald-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</span>
			</div>
			<div className="mt-6 w-fit mx-auto">
				<img
					src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
					className="rounded-full w-28 "
					alt="profile picture"
				/>
			</div>

			<div className="mt-8 ">
				<h2 className="text-white font-bold text-lg tracking-wide">
					Jonathan <br /> Smith
				</h2>
			</div>
			<p className="text-emerald-400 font-semibold text-xs mt-2.5">
				Active
			</p>

			<div className="mt-3 text-white text-sm bg-slate-600 hover:bg-red-800 p-2 rounded-lg">
				<button
					onClick={signOut}
					className="flex items-center justify-between w-full">
					<span className="flex items-center text-xs">
						Cerrar sesión
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 ml-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				</button>
			</div>
		</section>
	);
};

export default ProfileCardMenu;
