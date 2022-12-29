import {logout} from '../redux/reducers/authReducer';
import store from '../redux/store';

import {useEffect} from 'react';
import {axiosPrivate} from '../utils/AxiosUtils';
import {useToast} from '../hooks/useToast';
import {RiErrorWarningFill} from 'react-icons/ri';

const useAxiosPrivate = () => {
	const {auth} = store.getState();
	const {add} = useToast();

	useEffect(() => {
		const requestIntercept =
			axiosPrivate.interceptors.request.use(
				(config) => {
					console.log(config);
					if (!config.headers['Authorization']) {
						config.headers[
							'Authorization'
						] = `Bearer ${auth?.access_token}`;
					}
					return config;
				},
				(error) => {
					console.log(error);
					return Promise.reject(error);
				}
			);

		const responseIntercept =
			axiosPrivate.interceptors.response.use(
				(response) => {
					console.log(response);
					return response;
				},
				function (error) {
					if (error.response.data.error.code)
						add({
							title: 'Error',
							description:
								error.response.data.error.message,
							status: 'error',
							duration: 9000,
							isClosable: true,
							icon: <RiErrorWarningFill />,
						});
				}
			);

		return () => {
			axiosPrivate.interceptors.request.eject(
				requestIntercept
			);
			axiosPrivate.interceptors.response.eject(
				responseIntercept
			);
		};
	}, [auth]);

	return axiosPrivate;
};

export default useAxiosPrivate;
