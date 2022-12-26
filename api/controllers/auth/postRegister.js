import User from '../../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const postRegister = async (req, res) => {
	try {
		const {username, email, password} = req.body;
		const userExists = await User.findOne({
			email: email.toLocaleLowerCase(),
			username,
		});
		if (userExists) {
			res.status(400);
			throw new Error('Usuario ya existe');
		}
		const user = await User.create({
			username,
			email: email.toLocaleLowerCase(),
			password,
		});
		const token = jwt.sign(
			{
				_id: user._id,
				username: user.username,
				email: user.email,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '24h',
			}
		);
		res.status(201).send({
			email: user.email,
			username: user.username,
			access_token: token,
		});
	} catch (error) {
		return res.status(500).json({error: error.message});
	}
};

export default postRegister;
