import User from "../../models/user.js";
import FriendInvitation from "../../models/friendInvitation.js";
import serverStore from "../../serverStore.js";

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
      status: "pending",
    }).populate("senderId", "_id username email");

    // find if user of specific userId has active connection
    const receiverList = serverStore.getActiveConnections(userId);

    const io = serverStore.getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export default updateFriendsPendingInvitations;
