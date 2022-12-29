import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import httpServer from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import friendInvitationRoutes from './routes/friendInvitationRoutes.js';
import registerSocketServer from './socketServer.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// register routes
app.use('/api/auth', authRoutes);
app.use('/api/friend', friendInvitationRoutes);

let PORT;
process.env.STATUS === 'production'
	? (PORT = process.env.PROD_PORT)
	: (PORT = process.env.DEV_PORT);

const server = httpServer.createServer(app);
registerSocketServer(server);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		server.listen(PORT, () => {
			console.log(
				`Server is running on http://localhost:${PORT}`
			);
		});
	})
	.catch((err) => {
		console.log("Can't connect to the database");
		console.log(err);
	});
