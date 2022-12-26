import Joi from 'joi';

const postFriendInvitationSchema = Joi.object({
	targetMailAddress: Joi.string().email(),
});

export default postFriendInvitationSchema;
