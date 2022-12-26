import {useSelector} from 'react-redux';
import {
	Navigate,
	useLocation,
	useNavigate,
} from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import {useEffect} from 'react';

import {logout} from '../redux/reducers/authReducer';
import UserUtils from '../utils/UserUtils';
import store from '../redux/store';
import {connectWithSocketServer} from '../socket/socketConnection';

const PrivateRoute = ({children}) => {
	const location = useLocation();

	const authenticated = useSelector(
		(state) => state.auth.authenticated
	);

	const token = useSelector(
		(state) => state.auth.access_token
	);

	const navigate = useNavigate();

	const decodeToken = jwt_decode(token);

	useEffect(() => {
		const userDetails = JSON.parse(
			localStorage.getItem('state')
		);

		if (decodeToken.exp < Date.now() / 1000) {
			store.dispatch(logout());
			UserUtils.loggedOut(navigate);
		} else {
			connectWithSocketServer(
				userDetails.auth.access_token
			);
		}
	}, [decodeToken]);

	if (!authenticated) {
		return (
			<Navigate to="/login" state={{from: location}} />
		);
	}

	return children;
};

export default PrivateRoute;
