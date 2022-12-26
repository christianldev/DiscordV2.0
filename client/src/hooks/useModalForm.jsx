import React, {useState} from 'react';
import ProfileCardMenu from '../components/ProfileCardMenu/ProfileCardMenu';

export default function useModalForm() {
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');
	const [childrenModal, setChildrenModal] = useState(null);

	const handlerModal = (type) => {
		switch (type) {
			case 'profileCard':
				// setTitleModal('Editar foto de perfil');
				setChildrenModal(
					<ProfileCardMenu setShowModal={setShowModal} />
				);
				setShowModal(true);
				break;
			default:
				break;
		}
	};

	return {
		showModal,
		titleModal,
		childrenModal,
		handlerModal,
		setShowModal,
	};
}
