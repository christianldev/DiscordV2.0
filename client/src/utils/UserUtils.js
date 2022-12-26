import {
	resetAccountState,
	setLogged,
} from '../redux/reducers/accountReducer';
import {resetAppState} from '../redux/reducers/appReducer';

import {login, logout} from '../redux/reducers/authReducer';

import store from '../redux/store';

const avatarText = (user) => {
	if (user) {
		if (user.first_name && user.last_name) {
			if (
				user.first_name.length > 0 &&
				user.last_name.length > 0
			) {
				return (
					user.first_name[0] + user.last_name[0]
				).toUpperCase();
			} else if (user.first_name.length > 1) {
				return user.first_name
					.substring(0, 2)
					.toUpperCase();
			} else if (user.email.length > 1) {
				return user.email.substring(0, 2).toUpperCase();
			}
		} else if (user.email) {
			return user.email.substring(0, 2).toUpperCase();
		}
	}
	return '--';
};

const profileName = (user) => {
	if (user) {
		if (user.first_name && user.last_name) {
			return user.first_name + ' ' + user.last_name;
		} else {
			return user.email;
		}
	}
	return '--';
};

const logged = (response, navigate) => {
	store.dispatch(login(response));
	store.dispatch(setLogged(response.access_token));

	const redirect = new URLSearchParams(location.search).get(
		'redirect'
	);
	if (redirect) {
		navigate(redirect);
	} else {
		navigate('/home');
	}
};

const loggedOut = (navigate) => {
	store.dispatch(logout());
	store.dispatch(resetAccountState());
	store.dispatch(resetAppState());
	localStorage.clear();
	navigate('/');
};

export default {
	avatarText,
	profileName,
	logged,
	loggedOut,
};
