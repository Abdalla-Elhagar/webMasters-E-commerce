import { createSlice } from "@reduxjs/toolkit";

const selectedUser: any = localStorage.getItem("selectedUser")
  ? JSON.parse(localStorage.getItem("selectedUser"))
  : [];

const SavePass = createSlice({
  name: "savePass",
  initialState: { data: selectedUser },
  reducers: {
    newPass: (state, action) => {
      state.data = action.payload;

    //   window.localStorage.setItem("myUsers", JSON.stringify(state.data));
    },
  },
});

export default SavePass.reducer;
export const { newPass } = SavePass.actions;
