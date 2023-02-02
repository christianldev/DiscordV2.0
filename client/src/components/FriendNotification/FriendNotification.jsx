import React from "react";
import store from "../../redux/store";
import { RiCheckFill, RiCloseFill, RiErrorWarningFill } from "react-icons/ri";
import services from "../../services";
import { useToast } from "../../hooks/useToast";
import server from "../../interceptors/axios.interceptor";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

export function FriendNotification() {
  const { account } = store.getState();
  const {
    friends: { pendingFriendsInvitations },
  } = useSelector((state) => state);
  console.log(pendingFriendsInvitations);

  const { add } = useToast();

  const handleAcceptFriend = (friendId) => {
    console.log(friendId);
    services.friend
      .acceptFriendInvitation(friendId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        add({
          title: "Error",
          description: err.response.data.message,
          icon: <RiErrorWarningFill className="text-red-500" />,
        });
      });
  };

  const handleRejectFriend = (friend) => {
    console.log(friend);
  };

  return (
    <div className="relative inline-block">
      <div className="absolute right-0 z-20 w-64 mt-6 overflow-hidden bg-[#292b2f]  rounded-lg shadow-lg sm:w-80 dark:bg-gray-800">
        {pendingFriendsInvitations.length > 0 ? (
          pendingFriendsInvitations.map((friend) => (
            <div key={friend.senderId._id} className="py-2">
              <div className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform  hover:bg-gray-50 dark:hover:bg-gray-700 ">
                <div className="flex-shrink-0">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 mx-1 rounded-full"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="Jese image"
                  />
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray text-xs mb-1.5 dark:text-gray-400">
                    <span className="font-bold text-sky-500">
                      @{friend?.senderId.username}
                    </span>
                    <span className="text-gray-500 text-xs dark:text-gray-400">
                      {" "}
                      quiere ser tu amigo
                    </span>
                  </div>
                  <div className="text-xs text-sky-500">a few moments ago</div>
                </div>
                <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                  <div className=" inline-flex justify-end">
                    <button
                      onClick={() => handleAcceptFriend(friend._id)}
                      className="flex bg-green-500 hover:bg-green-600 px-2 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
                    >
                      <RiCheckFill />
                    </button>
                    <button className="flex bg-red-500 hover:bg-red-600 px-2 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                      <RiCloseFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center text-xs p-2 text-white">
            No hay invitaciones pendientes
          </h3>
        )}

        <a
          href="#"
          className="block py-2 font-bold text-xs text-center text-white bg-firstColor  hover:underline"
        >
          See all notifications
        </a>
      </div>
    </div>
  );
}

export default connect((state) => ({
  pendingFriendsInvitations: state.pendingFriendsInvitations,
}))(FriendNotification);
