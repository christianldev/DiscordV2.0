import React, { useState } from "react";
import { RiNotification3Fill, RiLogoutBoxRLine } from "react-icons/ri";
import FriendNotification from "../FriendNotification/FriendNotification";
import { Link, useNavigate } from "react-router-dom";
import store from "../../redux/store";
import UserUtils from "../../utils/UserUtils";
import { logout } from "../../redux/reducers/authReducer";
import { useToast } from "../../hooks/useToast";
import { useEffect } from "react";
import server from "../../interceptors/axios.interceptor";
import { useSelector } from "react-redux";

const Tabs = ({ dropdown, setDropdown }) => {
  const navigate = useNavigate();
  const { add } = useToast();
  const { account } = store.getState();
  const [notifications, setNotifications] = useState([]);

  const {
    friends: { pendingFriendsInvitations },
  } = useSelector((state) => state);

  const signOut = () => {
    store.dispatch(logout());
    UserUtils.loggedOut(navigate);
  };

  useEffect(() => {
    const notificationRead = async () => {
      try {
        const response = await server.get(`/notifications`, {
          headers: { userId: account.user.userId },
        });

        setNotifications(response.data.notifications);
      } catch (error) {
        console.log(error);
        add({
          title: "Error",
          description: error.response.data.message,
          icon: <RiErrorWarningFill className="text-red-500" />,
        });
      }
    };

    notificationRead();
  }, [pendingFriendsInvitations]);

  return (
    <div className="w-full h-20 md:h-16 px-6 shadow-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
      <div className="flex flex-row">
        <Link
          to={"/"}
          className="text-white text-xs p-2 rounded bg-[#393943] hover:bg-firstColor shadow-md flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>
        <button className="p-2 rounded text-xs bg-[#393943] hover:bg-firstColor text-white shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Profile
        </button>
        <button className="p-2 text-xs rounded bg-[#393943] hover:bg-firstColor text-white shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          Profile
        </button>
      </div>
      <div className="flex items-center relative">
        <div className="bg-[#393943] rounded p-2">
          <div className="flex items-center justify-end">
            <div className="flex items-center">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="p-2 text-xs rounded bg-[#393943] hover:bg-firstColor text-white shadow-md flex items-center justify-center"
              >
                <RiNotification3Fill className="h-5 w-5 text-white" />
                {notifications.length > 0 && (
                  <span
                    className="bg-green-500 rounded-full h-4 w-4 font-bold absolute top-3 right-12
                    transform  animate-bounce"
                  >
                    {notifications.length}
                  </span>
                )}
              </button>
              <button
                onClick={signOut}
                className="p-2 text-xs rounded bg-[#393943] hover:bg-firstColor text-white shadow-md flex items-center justify-center"
              >
                <RiLogoutBoxRLine className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        {dropdown && <FriendNotification />}
      </div>
    </div>
  );
};

export default Tabs;
