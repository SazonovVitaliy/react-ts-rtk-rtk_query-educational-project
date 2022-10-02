import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "./reducers/UserSlice";
import { postAPI } from "./../services/PostServices";
export const rootReducer = combineReducers({
  users,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
