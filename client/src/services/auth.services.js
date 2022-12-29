import {login, logout} from '../redux/reducers/authReducer';
import store from '../redux/store';
import {ApiService} from './api.services';

export class AuthenticationService extends ApiService {
	constructor() {
		super('auth');
	}
	login(payload) {
		return new Promise((resolve, reject) => {
			super
				.post(payload, '/login')
				.then((response) => {
					store.dispatch(login(response));
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	impersonate(userId) {
		return new Promise((resolve, reject) => {
			super
				.post(null, `Admin/Impersonate/${userId}`)
				.then((response) => {
					store.dispatch(logout());
					store.dispatch(login(response));
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	register(payload) {
		return new Promise((resolve, reject) => {
			super
				.post(payload, '/register')
				.then((response) => {
					if (response && response.user) {
						store.dispatch(login(response));
					}
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	verify(payload) {
		return new Promise((resolve, reject) => {
			super
				.post(payload, 'Verify')
				.then((response) => {
					store.dispatch(login(response));
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
	reset(email) {
		return super.post(null, 'Reset/' + email);
	}
}
