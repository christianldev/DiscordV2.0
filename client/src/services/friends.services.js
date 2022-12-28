import server from '../interceptors/axios.interceptor';
import {setPendingFriendsInvitations} from '../redux/reducers/friendsReducer';
import store from '../redux/store';
import {ApiService} from './api.services';

export class FriendService extends ApiService {
	constructor() {
		super('friends');
	}
	sendFriendInvitation(payload) {
		return new Promise((resolve, reject) => {
			server
				.post(
					this.controller + 'friend-invation/invite',
					payload
				)
				.then((response) => {
					store.dispatch(
						setPendingFriendsInvitations(response.data)
					);
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
}
