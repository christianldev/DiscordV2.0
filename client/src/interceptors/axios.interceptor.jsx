import axios from "axios";
import { logout } from "../redux/reducers/authReducer";
import store from "../redux/store";

const apiUrl = import.meta.env.VITE_REACT_APP_SERVER_URL?.toString() || "";
const config = {
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const server = axios.create(config);

server.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401 || error?.toString().includes("status code 401")) {
      store.dispatch(logout());
      window.location.replace("/login");
      return;
    }
    if (error.response?.data) {
      return Promise.reject(error.response.data);
    } else if (error.message) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject(error);
    }
  }
);

server.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      return config;
    }
    const { auth } = store.getState();
    if (auth.access_token) {
      config.headers.Authorization = `Bearer ${auth.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default server;
