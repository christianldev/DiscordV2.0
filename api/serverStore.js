const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
	// add new user to connectedUsers
	connectedUsers.set(socketId, {userId});
	console.log('New connected users');
	console.log(connectedUsers);
};

const removeDisconnectedUser = (socketId) => {
	// remove disconnected user from connectedUsers
	if (connectedUsers.has(socketId)) {
		connectedUsers.delete(socketId);
		console.log('New connected users');
		console.log(connectedUsers);
	}
};

export default {
	addNewConnectedUser,
	removeDisconnectedUser,
};
