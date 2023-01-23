import React from "react";
import SidebarChannels from "../components/SidebarChannels";
import SidebarMenu from "../components/SidebarMenu";
import useModalForm from "../hooks/useModalForm";
import Tabs from "../components/Tabs";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const AppLayout = () => {
  const [dropdown, setDropdown] = useState(false);
  const { setShowModal, showModal, handlerModal, titleModal, childrenModal } =
    useModalForm();

  return (
    <main>
      <div className="flex bg-[#393943]">
        <SidebarMenu />
        <SidebarChannels
          setShowModal={setShowModal}
          showModal={showModal}
          handlerModal={handlerModal}
          titleModal={titleModal}
          childrenModal={childrenModal}
        />
        <div className={`bg-[#393943] w-full px-5 ${showModal && "-z-10"}`}>
          <Tabs setDropdown={setDropdown} dropdown={dropdown} />

          <Outlet />
        </div>
      </div>
    </main>
  );
};
