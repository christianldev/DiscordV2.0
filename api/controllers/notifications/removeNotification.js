import Notification from "../../models/notification.js";

const removeFriendNotification = async (userId, userToNotifyId) => {
  try {
    const user = await Notification.findOne({ user: userToNotifyId });

    const notificationToRemove = user.notifications.find(
      (notification) =>
        notification.type === "newLike" &&
        notification.user.toString() === userId &&
        notification.post.toString() === postId
    );

    const indexOf = user.notifications
      .map((notification) => notification._id.toString())
      .indexOf(notificationToRemove._id.toString());

    user.notifications.splice(indexOf, 1);
    await user.save();

    return;
  } catch (error) {
    console.error(error);
  }
};

export default removeFriendNotification;
