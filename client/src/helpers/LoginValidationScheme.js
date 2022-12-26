import * as yup from 'yup';

const LoginValidationScheme = yup.object().shape({
	email: yup
		.string()
		.email('Ingrese un email válido')
		.required('Email es obligatorio'),
	password: yup
		.string()
		.required('Contraseña es obligatoria'),
});

export default LoginValidationScheme;
