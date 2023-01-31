import React from "react";

//Layouts

import { AppLayout } from "../layouts/AppLayout";

// pages

import InitialDashboard from "../components/InitialDashboard/InitialDashboard";
import Friends from "../pages/Friends";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    index: true,
    layout: <AppLayout />,
    element: <InitialDashboard />,
    exact: true,
  },
  {
    path: "/friends",
    layout: <AppLayout />,
    element: <Friends />,
    exact: true,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
