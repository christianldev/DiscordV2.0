import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],

  onlineUsers: [],
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    setPendingFriendsInvitations: (state, { payload }) => {
      state.pendingFriendsInvitations = payload;
    },
    setFriends: (state, { payload }) => {
      state.friends = payload;
    },
    acceptFriendInvitation: (state, { payload }) => {
      state.friends.push(payload);
      state.pendingFriendsInvitations = state.pendingFriendsInvitations.filter(
        (invitation) => invitation.id !== payload.id
      );
    },
    rejectFriendInvitation: (state, { payload }) => {
      state.pendingFriendsInvitations = state.pendingFriendsInvitations.filter(
        (invitation) => invitation.id !== payload
      );
    },

    setOnlineUsers: (state, { payload }) => {
      state.onlineUsers = payload;
    },
    resetFriendsState: (state) => {
      state.friends = initialState.friends;
      state.pendingFriendsInvitations = initialState.pendingFriendsInvitations;
      state.onlineUsers = initialState.onlineUsers;
    },
  },
});

export const {
  hydrate,
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
  acceptFriendInvitation,
  rejectFriendInvitation,
  resetFriendsState,
} = friendsSlice.actions;

export default friendsSlice.reducer;
