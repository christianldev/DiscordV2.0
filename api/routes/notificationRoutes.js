import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import notificationController from "../controllers/notifications/notificationController.js";
import Notification from "../models/notification.js";
import User from "../models/user.js";

router.get("/", auth, async (req, res) => {
  try {
    const { userid } = req.headers;

    const user = await Notification.findOne({
      user: userid,
    })
      .populate("notifications.user")
      .populate("notifications.friendinvitation");

    console.log(user);

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);

    if (user.unreadNotification) {
      user.unreadNotification = false;
      await user.save();
    }
    return res.status(200).send("Updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

export default router;
