import io from "socket.io-client";
import { setPendingFriendsInvitations } from "../redux/reducers/friendsReducer";
import store from "../redux/store";

let socket = null;

export const connectWithSocketServer = (token) => {
  socket = io("http://localhost:4000", {
    auth: {
      token: token,
    },
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("succesfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    console.log(data);
    const { pendingInvitations } = data;
    console.log("friends invitations event");
    console.log(pendingInvitations);
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
