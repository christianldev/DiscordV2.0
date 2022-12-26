import serverStore from '../serverStore.js';

const newConnectionHandler = async (socket, io) => {
	const userDetails = socket.user;

	serverStore.addNewConnectedUser({
		socketId: socket.id,
		userId: userDetails._id,
	});
};

export default newConnectionHandler;
