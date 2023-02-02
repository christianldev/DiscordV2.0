import newFriendNotification from "../../controllers/notifications/newFriendNotification.js";
import setNotificationToUnread from "../../controllers/notifications/unreadNotification.js";
import serverStore from "../../serverStore.js";

export const newFriendNotificationHandler = async (data) => {
  const { userId, friendInvitationId, userToNotifyId } = data;
  await newFriendNotification({
    userId,
    friendInvitationId,
    userToNotifyId,
  });

  const receiverSocket = serverStore
    .getActiveConnections()
    .find((connection) => connection.userId === data.userToNotifyId);

  console.log("receiverSocket", receiverSocket);

  if (receiverSocket) {
    // WHEN YOU WANT TO SEND MESSAGE TO A PARTICULAR SOCKET
    io.to(receiverSocket.socketId).emit("friend-notification", {
      message: "New friend notification",
    });
  }
  //
  else {
    await setNotificationToUnread(userToNotifyId);
  }
};
