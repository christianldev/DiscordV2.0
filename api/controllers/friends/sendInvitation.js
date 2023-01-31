import FriendInvitation from "../../models/friendInvitation.js";
import User from "../../models/user.js";
import { updateFriendsPendingInvitations } from "../../socketHandlers/updates/friends.js";
import { newFriendNotificationHandler } from "../../socketHandlers/updates/newNotification.js";
import newFriendNotification from "../notifications/newFriendNotification.js";

const sendInvitation = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, email } = req.user;

  try {
    // check if friend that we would like to invite is not user

    if (email.toLowerCase() === targetMailAddress.toLowerCase()) {
      return res
        .status(409)
        .send({ message: "You can not add yourself as a friend" });
    }

    const targetUser = await User.findOne({
      email: targetMailAddress.toLowerCase(),
    });

    if (!targetUser) {
      return res
        .status(404)
        .send({ message: "User with this email does not exist" });
    }

    // check if invitation has been already sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
      senderId: userId,
      receiverId: targetUser._id,
    });

    if (invitationAlreadyReceived) {
      return res.status(409).send({ message: "Invitation already sent" });
    }

    // check if the user whuch we would like to invite is already our friend
    const usersAlreadyFriends = targetUser.friends.find(
      (friendId) => friendId.toString() === userId.toString()
    );

    if (usersAlreadyFriends) {
      return res
        .status(409)
        .send({ message: "You are already friends with this user" });
    }

    // create new invitation in database
    const newInvitation = await FriendInvitation.create({
      senderId: userId,
      receiverId: targetUser._id,
    });

    // if invtiation has been successfully created we would like to update friends invitations if other user is online

    // send pending invitations update to specific user
    updateFriendsPendingInvitations(targetUser._id.toString());
    newFriendNotificationHandler({
      userId,
      friendInvitationId: newInvitation._id,
      userToNotifyId: targetUser._id,
    });

    return res.status(201).send({ message: "Invitation sent" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export default sendInvitation;
