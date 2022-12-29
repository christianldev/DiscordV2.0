import serverStore from '../serverStore.js';

const disconnectHandler = (socket) => {
	const socketId = socket.id;
	serverStore.removeConnectedUser(socketId);
};

export default disconnectHandler;
