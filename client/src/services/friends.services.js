import {setPendingFriendsInvitations} from '../redux/reducers/friendsReducer';
import store from '../redux/store';
import {ApiService} from './api.services';

export class FriendService extends ApiService {
	constructor() {
		super('friend');
	}
	sendFriendInvitation(payload) {
		return new Promise((resolve, reject) => {
			super.post(payload, '/invite').then((response) => {
				store.dispatch(
					setPendingFriendsInvitations(response)
				);
				resolve(response);
			});
		});
	}
}
