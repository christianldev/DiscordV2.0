import User from "../../models/user.js";

const setNotificationToUnread = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user.unreadNotification) {
      user.unreadNotification = true;
      await user.save();
    }

    return;
  } catch (error) {
    console.error(error);
  }
};

export default setNotificationToUnread;
