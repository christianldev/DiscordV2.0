import axios from 'axios';
import store from '../redux/store';
const BASE_URL =
	import.meta.env.VITE_REACT_APP_SERVER_URL?.toString() ||
	'';

export default axios.create({
	baseURL: BASE_URL,
});

const {auth} = store.getState();

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: `Bearer ${auth?.access_token}`,
	},
});

axiosPrivate.defaults.headers.common[
	'Access-Control-Allow-Origin'
] = '*';
