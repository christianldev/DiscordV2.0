import Joi from 'joi';

const registerSchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string()
		.required()
		.min(6)
		.regex(/^[a-zA-Z0-9]{3,30}$/),
	confirmPassword: Joi.string()
		.required()
		.min(6)
		.valid(Joi.ref('password'))
		.messages({'any.only': 'Passwords do not match'}),
});

export default registerSchema;
