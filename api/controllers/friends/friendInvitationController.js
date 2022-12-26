const friendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');
const {handleHttpError} = require('../../utils');

const sendInvitation = async (req, res) => {
	const {targetMailAddress} = req.body;
	const {userId, email} = req.user;

	if (
		email.toLowerCase() === targetMailAddress.toLowerCase()
	) {
		return res.status(409).json({
			message: 'You cannot send an invitation to yourself',
		});
	}

	const targetUser = await User.findOne({
		email: targetMailAddress.toLowerCase(),
	});

	if (!targetUser) {
		return res.status(404).json({
			message: `User with email ${targetMailAddress} not found`,
		});
	}

	try {
		const invitation = await friendInvitation.create({
			senderId: userId,
			receiverId: targetMailAddress,
		});

		res.status(200).json({
			message: 'Invitation sent',
			invitation,
		});
	} catch (error) {
		handleHttpError(error, res);
	}
};

module.exports = {sendInvitation};
