import Joi from 'joi';

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string()
		.required()
		.min(6)
		.regex(/^[a-zA-Z0-9]{3,30}$/),
});

export default loginSchema;
