import serverStore from '../serverStore.js';

const disconnectHandler = (socket) => {
	const socketId = socket.id;
	serverStore.removeDisconnectedUser(socketId);
};

export default disconnectHandler;
