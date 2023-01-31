import serverStore from "../serverStore.js";
import {
  updateFriends,
  updateFriendsPendingInvitations,
} from "./updates/friends.js";

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  // update pending friends invitations list
  updateFriendsPendingInvitations(userDetails.userId);

  // update friends list
  updateFriends(userDetails.userId);
};

export default newConnectionHandler;
