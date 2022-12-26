import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
});

userSchema.pre('save', async function (next) {
	const user = this,
		salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);
	next();
});

userSchema.methods.matchPassword = async function (
	enteredPassword
) {
	return await bcrypt.compare(
		enteredPassword,
		this.password
	);
};

const User = mongoose.model('user', userSchema);

export default User;
