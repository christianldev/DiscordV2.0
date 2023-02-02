import { lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Theme } from "./utils/ThemeUtils";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./pages/Login";
import Register from "./pages/Register";

import PrivateRoute from "./router/PrivateRoute";
import { Toaster } from "react-hot-toast";

import Navigation from "./router/Navigation";
import { io } from "socket.io-client";

const Landing = lazy(() => import("./pages/Landing"));

function App() {
  const theme = useSelector((state) => state.theme.value);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const socket = localStorage.getItem("auth") ? io : null;
  const dispatch = useDispatch();

  useEffect(() => {
    const htmlClasses = document.querySelector("html")?.classList;
    if (theme === Theme.LIGHT) {
      htmlClasses?.remove("dark");
    } else {
      htmlClasses?.add("dark");
    }
  }, [theme]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("friend-notification", (data) => {
  //       console.log(data);
  //       dispatch(addNotifications(data));
  //     });
  //   }
  // }, [dispatch, socket]);

  return (
    <BrowserRouter>
      <Toaster />
      {!authenticated && (
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          </Route>
        </Routes>
      )}
      {authenticated && (
        <PrivateRoute>
          <Navigation />
        </PrivateRoute>
      )}
    </BrowserRouter>
  );
}

export default App;
