import { createSlice } from "@reduxjs/toolkit";

const sendData = createSlice({
  name: "sendData",
  initialState: { close: true,total:0 },
  reducers: {
    close: (state, action) => {
      state.close = action.payload;
    },
    sendTotal: (state, action) => {
      state.total = action.payload
    }
  },
});

export default sendData.reducer;
export const { close , sendTotal } = sendData.actions;
