import express from 'express';
const router = express.Router();
import friendsController from '../controllers/friends/friendsContoller.js';
import validation from 'express-joi-validation';
import auth from '../middleware/auth.js';
import postFriendInvitationSchema from '../validators/postFriendInvitationSchema.js';

const validator = validation.createValidator({});

router.post(
	'/invite',
	auth,
	validator.body(postFriendInvitationSchema),
	friendsController.sendInvitation
);

export default router;
