import React, {useState} from 'react';
import ChannelsOption from '../ChannelsOption';
import DirectMessages from '../DirectMessages';

import ProfileSection from '../ProfileSection';

const SidebarChannels = ({
	setShowModal,
	showModal,
	handlerModal,
	titleModal,
	childrenModal,
}) => {
	return (
		<div
			className="hidden xl:flex lg:flex flex-col justify-between bg-[#303136] w-[14rem] shrink-0 h-screen sticky 
        top-0 overflow-y-auto">
			<div className="p-4">
				<ChannelsOption />
				<DirectMessages />
			</div>
			<ProfileSection
				setShowModal={setShowModal}
				showModal={showModal}
				handlerModal={handlerModal}
				titleModal={titleModal}
				childrenModal={childrenModal}
			/>
		</div>
	);
};

export default SidebarChannels;
