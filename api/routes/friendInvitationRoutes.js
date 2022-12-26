import express from 'express';
const router = express.Router();

import validation from 'express-joi-validation';
import auth from '../middleware/auth.js';
import postFriendInvitationSchema from '../validators/postFriendInvitationSchema.js';

const validator = validation.createValidator({});

router.post(
	'/invite',
	auth,
	validator.body(postFriendInvitationSchema)
);

export default router;
