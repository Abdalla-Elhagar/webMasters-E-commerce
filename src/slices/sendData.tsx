import { createSlice } from "@reduxjs/toolkit";

const sendData = createSlice({
  name: "sendData",
  initialState: { close: true },
  reducers: {
    close: (state, action) => {
      state.close = action.payload;
    },
  },
});

export default sendData.reducer;
export const { close } = sendData.actions;
