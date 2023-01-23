import React from "react";
import useModalForm from "../../hooks/useModalForm";
import store from "../../redux/store";
import ModalStructure from "../ModalStructure";

const ProfileSection = ({
  setShowModal,
  showModal,
  handlerModal,
  titleModal,
  childrenModal,
}) => {
  const {
    account: { user },
  } = store.getState();

  return (
    <div
      className="bg-[#292b2f] h-[5rem] flex text-white/80 items-center 
                            px-1 justify-evenly rounded-2xl m-2"
    >
      <div
        onClick={() => handlerModal("profileCard")}
        className="flex items-center cursor-pointer w-1/2 hover:bg-white/25 p-2 rounded-lg"
      >
        <img
          src="https://lh3.googleusercontent.com/a/ALm5wu3poeMxmKWHEsA7MTpEWEHeOI7uBbPpp4_dgP7e=s96-c"
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className=" pl-2">
          <p className="text-xs">{user.username}</p>
          <p className="text-xs text-gray-400">#10378</p>
        </div>
      </div>
      <div className=" flex space-x-2 text-[16px]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          className="cursor-pointer"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            d="M0 
                    0h24v24H0z"
          ></path>
          <path
            d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 
                    1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 
                    6-6.72h-1.7z"
          ></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 
                        83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671
                         12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 
                         256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 
                         111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
          ></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M413.967 276.8c1.06-6.235 1.06-13.518 
                         1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 
                115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 
                20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 
                0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 
                20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 
                13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318
                 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 
                 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 
                 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 
                 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 
                 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"
          ></path>
        </svg>
      </div>
      {showModal ? (
        <ModalStructure
          showModal={showModal}
          setShowModal={setShowModal}
          titleModal={titleModal}
        >
          {childrenModal}
        </ModalStructure>
      ) : null}
    </div>
  );
};

export default ProfileSection;
