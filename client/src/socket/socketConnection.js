import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (token) => {
	socket = io('http://localhost:4000', {
		auth: {
			token: token,
		},
		transports: ['websocket'],
	});
	socket.on('connect', () => {
		console.log(
			'succesfully connected with socket.io server'
		);
		console.log(socket.id);
	});
};
