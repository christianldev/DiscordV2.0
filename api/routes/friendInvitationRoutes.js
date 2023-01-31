import express from "express";
const router = express.Router();
import friendsController from "../controllers/friends/friendsContoller.js";
import validation from "express-joi-validation";
import auth from "../middleware/auth.js";
import postFriendInvitationSchema from "../validators/postFriendInvitationSchema.js";
import inviteDecisionSchema from "../validators/inviteDecisionSchema.js";

const validator = validation.createValidator({});

router.post(
  "/invite",
  auth,
  validator.body(postFriendInvitationSchema),
  friendsController.sendInvitation
);
router.post(
  "/accept",
  auth,
  validator.body(inviteDecisionSchema),
  friendsController.acceptInvitation
);
router.post(
  "/reject",
  auth,
  validator.body(inviteDecisionSchema),
  friendsController.rejectInvitation
);

export default router;
