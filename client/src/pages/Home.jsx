import React from 'react';
import SidebarChannels from '../components/SidebarChannels';
import SidebarMenu from '../components/SidebarMenu';
import useModalForm from '../hooks/useModalForm';
import Tabs from '../components/Tabs';

export const Home = ({children}) => {
	const {
		setShowModal,
		showModal,
		handlerModal,
		titleModal,
		childrenModal,
	} = useModalForm();

	return (
		<main>
			<div className="flex bg-[#393943]">
				<SidebarMenu />
				<SidebarChannels
					setShowModal={setShowModal}
					showModal={showModal}
					handlerModal={handlerModal}
					titleModal={titleModal}
					childrenModal={childrenModal}
				/>
				<div className="bg-[#393943] w-full px-5">
					<Tabs />

					{children}
				</div>
			</div>
		</main>
	);
};
