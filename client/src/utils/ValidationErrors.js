export const getValidationError = (errorCode) => {
	const codeMatcher = {
		ERR_NETWORK: 'Error de red',
		ERR_TIMEOUT: 'Tiempo de espera agotado',
		ERR_CANCEL: 'Cancelado',
		ERR_UNKNOWN: 'Error desconocido',
		ERR_400: 'Solicitud inválida',
		ERR_401: 'Credenciales inválidas',
		ERR_403: 'Acceso denegado',
	};

	return codeMatcher[errorCode];
};
