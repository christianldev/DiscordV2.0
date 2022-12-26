import React from 'react';
import {RiUserFollowLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const ChannelsOption = () => {
	return (
		<>
			<label htmlFor="table-search" className="sr-only">
				Search
			</label>
			<div className="relative mt-1">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-5 h-5 text-slate-400 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"></path>
					</svg>
				</div>
				<input
					type="text"
					id="table-search"
					className="bg-[#36393f] border border-gray-300 text-slate-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search"
				/>
			</div>

			<div className="mt-4 space-y-1">
				<div className="flex text-white/50 items-center text-[20px] ">
					<Link
						to={'/friends'}
						className="flex items-center hover:bg-firstColor hover:text-white focus:bg-firstColor
                 focus:text-white w-full py-2.5 rounded-[0.4rem] font-semibold duration-100 ease-out "
						style={{opacity: '1', transform: 'none'}}>
						<div className="pl-4 text-[20px]">
							<RiUserFollowLine />
						</div>
						<p className="ml-2 text-xs">Amigos</p>
					</Link>
				</div>
				<div className="flex text-white/50 items-center text-[20px] ">
					<button
						className="flex items-center 
                hover:bg-firstColor hover:text-white focus:bg-[#7289dc] focus:text-white w-full py-2.5
                 rounded-[0.4rem] font-semibold duration-100 ease-out "
						style={{opacity: '1', transform: 'none'}}>
						<div className="pl-4 text-[20px]">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 512 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M380.95 114.46c-62.946-13.147-63.32 32.04-124.868 
                    32.04-53.25 0-55.247-44.675-124.87-32.04C17.207 135.072-.32 385.9 60.16 399.045c33.578
                     7.295 50.495-31.644 94.89-59.593a51.562 51.562 0 0 0 79.77-25.78 243.665 243.665 0 0 1 
                     21.24-.91c7.466 0 14.44.32 21.126.898a51.573 51.573 0 0 0 79.82 25.717c44.45 27.95 61.367 
                     66.93 94.955 59.626 60.47-13.104 42.496-260.845-71.01-284.543zM147.47 
            242.703h-26.144V216.12H94.73v-26.143h26.594v-26.593h26.144v26.582h26.582v26.144h-26.582v26.582zm38.223 
            89.615a34.336 34.336 0 1 1 34.337-34.336 34.336 34.336 0 0 1-34.325 34.346zm140.602 0a34.336 34.336
             0 1 1 34.367-34.325 34.336 34.336 0 0 1-34.368 34.335zM349.98 220.36A17.323 17.323 0 1 1 367.3 
             203.04a17.323 17.323 0 0 1-17.323 17.323zm37.518 37.52a17.323 17.323 0 1 1 17.322-17.324 17.323
              17.323 0 0 1-17.365 17.334zm0-75.048a17.323 17.323 0 1 1 17.322-17.323 17.323 17.323 0 0 1-17.365 
              17.333zm37.518 37.518a17.323 17.323 0 1 1 17.323-17.323 17.323 17.323 0 0 1-17.367 17.334z"></path>
							</svg>
						</div>
						<p className="ml-2 text-xs">Gaming</p>
					</button>
				</div>

				<div className="flex text-white/50 items-center text-[20px] ">
					<button
						className="flex items-center hover:bg-firstColor hover:text-white
                                 focus:bg-[#7289dc] focus:text-white w-full py-2.5 rounded-[0.4rem] 
                    font-semibold duration-100 ease-out "
						style={{opacity: '1', transform: 'none'}}>
						<div className="pl-4 text-[20px]">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 16 16"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 
                        5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
							</svg>
						</div>
						<p className="ml-2 text-xs">Content Creator</p>
					</button>
				</div>
			</div>
		</>
	);
};

export default ChannelsOption;
