import {AuthenticationService} from './auth.services';
import {FriendService} from './friends.services';

class Services {
	constructor() {
		this.authentication = new AuthenticationService();
		this.friend = new FriendService();
	}
}

export default new Services();
