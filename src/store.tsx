import { configureStore } from "@reduxjs/toolkit";
import sendDataReducer from "./slices/sendData";
import ArrayOfUsersReducer from "./slices/saveNewUser";
import productDataReducer from "./slices/productData"

export const myStore = configureStore({
  reducer: {
    sendData: sendDataReducer,
    ArrayOfUsers: ArrayOfUsersReducer,
    productData: productDataReducer
  },
});
