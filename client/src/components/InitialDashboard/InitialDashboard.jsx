import React from 'react';
import useModalForm from '../../hooks/useModalForm';

const servers = [
	{
		id: 1,
		img: 'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Fbanner?alt=media&amp;token=d571b0ba-15ad-4722-8b7b-1a58bfad1489',
		sub_image:
			'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Favatar?alt=media&amp;token=59de5633-9d3e-4d7f-8dc2-a663d40feb97',
		name: 'Server 1',
		description: 'This is the first server I created',
		members: 1000,
		online: 500,
	},
	{
		id: 2,
		img: 'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Fbanner?alt=media&amp;token=d571b0ba-15ad-4722-8b7b-1a58bfad1489',
		sub_image:
			'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Favatar?alt=media&amp;token=59de5633-9d3e-4d7f-8dc2-a663d40feb97',
		name: 'Server 2',
		description: 'This is the second server I created',
		members: 1000,
		online: 500,
	},
	{
		id: 3,
		img: 'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Fbanner?alt=media&amp;token=d571b0ba-15ad-4722-8b7b-1a58bfad1489',
		sub_image:
			'https://firebasestorage.googleapis.com/v0/b/discord-clone-eb851.appspot.com/o/discord%2FfTNkVrH2tY68tEnqA1AJ%2Favatar?alt=media&amp;token=59de5633-9d3e-4d7f-8dc2-a663d40feb97',
		name: 'Server 3',
		description: 'This is the third server I created',
		members: 1000,
		online: 500,
	},
];

const InitialDashboard = () => {
	const {showModal} = useModalForm();
	return (
		<>
			<div
				className={`relative h-[13rem] sm:h-[16rem] md:h-[19rem] rounded-[0.3rem]
				 ${showModal ? ' -z-10' : 'z-0'}`}>
				<div className="absolute flex w-full">
					<img
						src="https://i.postimg.cc/sg5dkv6h/hero.jpg"
						className="object-cover w-full rounded-[0.3rem]
             h-[13rem] md:h-[19rem] sm:h-[16rem] brightness-50"
					/>
				</div>
				<div
					className="absolute flex w-full h-full
              bg-black/20 "></div>
				<div
					className="relative flex flex-col items-center justify-center 
              h-full font-bold text-white pb-0 space-y-2">
					<p className="text-[19px] md:text-[24px] font-black">
						Find your community on Discord
					</p>
					<p
						className="pb-2 text-[13.5px] md:text-[17px]
                 text-white/70">
						From gaming, to music, to study, there's a place
						for you.
					</p>
					<div className="relative flex items-center mb-4">
						<input
							type="search"
							placeholder="Explore servers"
							className="rounded-[0.3rem] pl-3
                     placeholder:text-[14px] md:placeholder:text-[16px] placeholder:text-gray-500 outline-0 
                     py-2 md:py-3 w-[25rem] md:w-[35rem] text-black"
							defaultValue={''}
						/>
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="absolute text-black right-2"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="8"></circle>
							<line
								x1="21"
								y1="21"
								x2="16.65"
								y2="16.65"></line>
						</svg>
					</div>
				</div>
			</div>
			<div className="pt-6">
				<div className="text-white pb-4">
					<p className="font-bold text-[20px]">
						Featured Servers
					</p>
					<p className="text-white/50">
						Some awesome Discords we think you'd love
					</p>
				</div>
				<div
					className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-y-8 xs:gap-x-2
                         sm:gap-x-4 mb-4">
					{servers.map((server) => (
						<div
							key={server.id}
							className="w-full cursor-pointer opacity-100">
							<div
								className="h-40 flex w-full
                     cursor-pointer">
								<img
									src={server.img}
									className="rounded-t-[0.8rem] object-cover w-full"
								/>
							</div>
							<div
								className={`bg-[#292b2f] relative h-[11.5rem] 
                      px-[1rem] rounded-b-[0.8rem] ${
												showModal && '-z-10'
											}`}>
								<div
									className="absolute -top-8 left-4 w-16 h-16 flex rounded-[1rem] p-1
                       bg-[#292b2f]">
									<img
										src={server.sub_image}
										className=" object-cover rounded-[1rem]"
									/>
								</div>
								<p className="text-white font-bold text-[17px] pt-9">
									{server.name}
								</p>
								<p className=" text-white font-medium text-[15px] pt-1">
									{server.description}
								</p>
								<p className=" text-white font-medium text-[13.5px] pt-3 pb-4 ">
									{server.online} Online • {server.members}{' '}
									Members
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default InitialDashboard;
