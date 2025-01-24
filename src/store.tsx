import { configureStore } from "@reduxjs/toolkit";
import sendDataReducer from "./slices/sendData";
import ArrayOfUsersReducer from "./slices/saveNewUser";
import productDataReducer from "./slices/productData"
import SelectedUserReducer from "./slices/selectedUser";
import SavePassReducer from "./slices/saveNewPassword"

export const myStore = configureStore({
  reducer: {
    sendData: sendDataReducer,
    ArrayOfUsers: ArrayOfUsersReducer,
    productData: productDataReducer,
    SelectedUser: SelectedUserReducer,
    SavePass: SavePassReducer,
  },
});
