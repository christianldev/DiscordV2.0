import { combineReducers, configureStore } from "@reduxjs/toolkit";

import throttle from "lodash.throttle";

import authReducer from "./reducers/authReducer";
import themeReducer from "./reducers/themeReducer";
import friendsReducer from "./reducers/friendsReducer";

import { loadState, saveState } from "../utils/LocalStorage";
import accountReducer from "./reducers/accountReducer";

const reducers = combineReducers({
  account: accountReducer,
  auth: authReducer,
  theme: themeReducer,
  friends: friendsReducer,
});

const persistedState = loadState();
const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState({
      account: store.getState().account,
      auth: store.getState().auth,
      theme: store.getState().theme,
      friends: store.getState().friends,
    });
  }, 1000)
);

export default store;
