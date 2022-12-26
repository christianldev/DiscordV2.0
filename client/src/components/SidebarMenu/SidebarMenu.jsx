import React from 'react';

const SidebarMenu = () => {
	return (
		<div
			className="hidden sm:flex bg-[#212226] w-[4rem] shrink-0 h-screen sticky top-0 pt-6 
             overflow-y-auto 
        ">
			<div className="flex flex-col items-center w-full space-y-4">
				<div
					className="bg-[#36393f] 
        p-1 rounded-[1.3rem] cursor-pointer transform-none">
					<img
						src="https://i.postimg.cc/wj1MdTXc/dc.png"
						className="w-10 h-10 rounded-full text-white 
            brightness-[80%]"
					/>
				</div>{' '}
				<div className="space-y-2 pt-4">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<a href="/community/createCommunity">
					<div className="bg-[#36393f] p-4 rounded-full">
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-4 h-4 rounded-full text-white 
                    cursor-pointer"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg">
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</div>
				</a>
				<div className="bg-[#7289dc] p-3 rounded-[1.3rem] cursor-pointer transform-none">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 1024 1024"
						className="w-5 h-5 rounded-full text-white"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 
            448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2l98.7-225.5 
            132.1 132.1-225.5 98.7zm375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 
            0 3.2z"></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default SidebarMenu;
