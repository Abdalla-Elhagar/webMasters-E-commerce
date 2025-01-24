import { createSlice } from "@reduxjs/toolkit";

const selected: any = localStorage.getItem("selectedUser")
  ? JSON.parse(localStorage.getItem("selectedUser"))
  : [];

const SelectedUser = createSlice({
  name: "SelectedUser",
  initialState: { selectedData: selected },
  reducers: {
    sUser: (state, action) => {
      state.selectedData = action.payload;

      window.localStorage.setItem("selectedUser", JSON.stringify(state.selectedData));
    },
  },
});

export default SelectedUser.reducer;
export const { sUser } = SelectedUser.actions;
