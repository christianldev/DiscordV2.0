import {
  acceptFriendInvitation,
  rejectFriendInvitation,
  setPendingFriendsInvitations,
} from "../redux/reducers/friendsReducer";
import store from "../redux/store";
import { ApiService } from "./api.services";

export class FriendService extends ApiService {
  constructor() {
    super("friend");
  }
  sendFriendInvitation(payload) {
    return new Promise((resolve, reject) => {
      super
        .post(payload, "/invite")
        .then((response) => {
          console.log(response);

          if (response && response.user) {
            store.dispatch(setPendingFriendsInvitations(response));
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  acceptFriendInvitation(payload) {
    return new Promise((resolve, reject) => {
      super
        .post(payload, "/accept")
        .then((response) => {
          console.log(response);

          if (response && response.user) {
            store.dispatch(acceptFriendInvitation(response));
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  rejectFriendInvitation(payload) {
    return new Promise((resolve, reject) => {
      super
        .post(payload, "/reject")
        .then((response) => {
          console.log(response);

          if (response && response.user) {
            store.dispatch(rejectFriendInvitation(response));
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
