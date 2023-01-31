import FriendInvitation from "../../models/friendInvitation.js";
import User from "../../models/user.js";
import {
  updateFriends,
  updateFriendsPendingInvitations,
} from "../../socketHandlers/updates/friends.js";
import newFriendNotification from "../notifications/newFriendNotification.js";

const acceptInvitation = async (req, res) => {
  console.log("acceptInvitation");
  console.log(req.body);
  try {
    const { _id } = req.body;

    const invitation = await FriendInvitation.findOne({ _id });
    console.log("invitation", invitation);

    if (!invitation) {
      return res.status(401).send({ message: "Invitation does not exist" });
    }

    const { senderId, receiverId } = invitation;

    // add friends to both users
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    // delete invitation
    await FriendInvitation.findByIdAndDelete(_id);

    // update list of the friends if the users are online
    updateFriends(senderId.toString());
    updateFriends(receiverId.toString());

    // update list of friends pending invitations
    updateFriendsPendingInvitations(receiverId.toString());

    newFriendNotification(senderId, receiverId);

    return res.status(200).send({ message: "Invitation accepted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Error occured. Please try again" });
  }
};

export default acceptInvitation;
