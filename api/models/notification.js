import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  notifications: [
    {
      type: {
        type: String,
        enum: ["newFriend", "newMessage"],
      },
      user: { type: Schema.Types.ObjectId, ref: "User" },
      friendinvitation: {
        type: Schema.Types.ObjectId,
        ref: "FriendInvitation",
      },
      text: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
