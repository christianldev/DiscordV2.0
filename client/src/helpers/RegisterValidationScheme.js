import * as yup from 'yup';

const RegisterValidationScheme = yup.object().shape({
	email: yup.string().email().required(),
	username: yup.string().required(),
	password: yup.string().required().min(8),
	confirmPassword: yup
		.string()
		.required()
		.equals([yup.ref('password')]),
});

export default RegisterValidationScheme;
