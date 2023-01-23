import FriendInvitation from "../../models/friendInvitation.js";
import User from "../../models/user.js";
import updateFriendsPendingInvitations from "../../socketHandlers/updates/friends.js";

const sendInvitation = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, email } = req.user;

  try {
    // check if friend that we would like to invite is not user
    if (email.toLowerCase() === targetMailAddress.toLowerCase()) {
      return res.status(409).send({ message: "You can not invite yourself" });
    }

    const targetUser = await User.findOne({
      email: targetMailAddress.toLowerCase(),
    });

    console.log("targetUser", targetUser);

    if (!targetUser) {
      return res
        .status(404)
        .send({ message: "User with this email address does not exist" });
    }

    // check if invitation has been already sent
    const invitationAlreadySent = await FriendInvitation.findOne({
      senderId: targetUser._id,
      receiverId: userId,
    });

    console.log("invitationAlreadySent", invitationAlreadySent);

    if (invitationAlreadySent) {
      return res
        .status(409)
        .send({ message: "Invitation has been already sent" });
    }

    // check if invitation has been already received
    const invitationAlreadyReceived = await FriendInvitation.findOne({
      senderId: userId,
      receiverId: targetUser._id,
    });

    console.log("invitationAlreadyReceived", invitationAlreadyReceived);

    if (invitationAlreadyReceived) {
      return res
        .status(409)
        .send({ message: "Invitation has been already received" });
    }

    // check if users are already friends
    const alreadyFriends = targetUser.friends.find(
      (friend) => friend.toString() === userId.toString()
    );
    console.log("alreadyFriends", alreadyFriends);

    if (alreadyFriends) {
      return res
        .status(409)
        .send({ message: `Ya eres amigo de ${targetMailAddress}` });
    }

    const invitation = await FriendInvitation.create({
      senderId: userId,
      receiverId: targetUser._id,
      status: "pending",
    });

    //send pending invitations update to specific user
    updateFriendsPendingInvitations(targetUser._id.toString());

    res.status(201).send({ message: "Invitacion enviada" });
  } catch (error) {
    console.log("error", error);

    res.status(500).send({ message: error.message });
  }
};

export default sendInvitation;
