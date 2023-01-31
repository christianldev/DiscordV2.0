import Notification from "../../models/notification.js";
import setNotificationToUnread from "./unreadNotification.js";

const newFriendNotification = async ({
  userId,
  friendInvitationId,
  userToNotifyId,
}) => {
  try {
    const userToNotify = await Notification.findOne({ user: userToNotifyId });
    console.log("userToNotify", userToNotify);

    const newNotification = {
      type: "newFriend",
      user: userId,
      friendinvitations: friendInvitationId,
      date: Date.now(),
    };

    userToNotify.notifications.unshift(newNotification);
    await userToNotify.save();

    setNotificationToUnread(userToNotifyId);
  } catch (error) {
    console.error(error);
  }
};

export default newFriendNotification;
