import { configureStore } from "@reduxjs/toolkit";
import sendDataReducer from "./slices/sendData"

export const myStore = configureStore({
    reducer: {
        sendData : sendDataReducer
    }
});