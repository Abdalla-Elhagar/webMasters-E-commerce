import { configureStore } from "@reduxjs/toolkit";
import sendDataReducer from "./slices/sendData";
import ArrayOfUsersReduser from "./slices/saveNewUser";

export const myStore = configureStore({
  reducer: {
    sendData: sendDataReducer,
    ArrayOfUsers: ArrayOfUsersReduser,
  },
});
