import React from 'react';
import {Link} from 'react-router-dom';

const DirectMessages = () => {
	return (
		<div className="mt-4 space-y-1">
			<div className="flex text-white/50 items-center text-[20px] ">
				<h3
					className="flex items-center
                  w-full py-2.5 "
					style={{opacity: '1', transform: 'none'}}>
					<p className="ml-2 text-xs uppercase">
						Direct Messages
					</p>
					<div className="pl-4 text-[20px]">
						<svg
							x="0"
							y="0"
							className="fill-current text-white/50"
							aria-hidden="true"
							role="img"
							width="14"
							height="14"
							viewBox="0 0 18 18">
							<polygon
								fillRule="nonzero"
								fill="currentColor"
								points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
						</svg>
					</div>
				</h3>
			</div>

			<div className="flex items-center space-x-2">
				<Link className="relative">
					<img
						className="w-10 h-10 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>
					<span className="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 rounded-full"></span>
				</Link>
				<div className="flex flex-col space-y-1">
					<a
						href="/component/toast"
						className="font-semibold text-firstColor transition-colors duration-300  text-xs dark:hover:text-primary hover:text-primary hover:underline">
						Tailwind CSS
					</a>{' '}
					<a
						href="/u/zoltanszogyenyi"
						className="text-xs text-white/50 dark:text-gray-400 hover:underline">
						zoltanszogyenyi
					</a>
				</div>
			</div>

			<div className="flex items-center space-x-2 space-y-3">
				<Link className="relative">
					<img
						className="w-10 h-10 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>
					<span className="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 rounded-full"></span>
				</Link>
				<div className="flex flex-col space-y-1">
					<a
						href="/component/toast"
						className="font-semibold text-firstColor transition-colors duration-300  text-xs dark:hover:text-primary hover:text-primary hover:underline">
						Tailwind CSS
					</a>{' '}
					<a
						href="/u/zoltanszogyenyi"
						className="text-xs text-white/50 dark:text-gray-400 hover:underline">
						zoltanszogyenyi
					</a>
				</div>
			</div>

			<div className="flex items-center space-x-2 space-y-3">
				<Link className="relative">
					<img
						className="w-10 h-10 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>
					<span className="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 rounded-full"></span>
				</Link>
				<div className="flex flex-col space-y-1">
					<a
						href="/component/toast"
						className="font-semibold text-firstColor transition-colors duration-300  text-xs dark:hover:text-primary hover:text-primary hover:underline">
						Tailwind CSS
					</a>{' '}
					<a
						href="/u/zoltanszogyenyi"
						className="text-xs text-white/50 dark:text-gray-400 hover:underline">
						zoltanszogyenyi
					</a>
				</div>
			</div>
		</div>
	);
};

export default DirectMessages;
