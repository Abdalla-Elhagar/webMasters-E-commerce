import { createSlice } from "@reduxjs/toolkit";

const selected: any = localStorage.getItem("selectedUser")
  ? localStorage.getItem("selectedUser")
  : [];

const SelectedUser = createSlice({
  
  name: "SelectedUser",
  initialState: { selectedData: localStorage.getItem("selectedUser")?JSON.parse(selected):[] },
  reducers: {
    sUser: (state, action) => {
      state.selectedData = action.payload;

      window.localStorage.setItem(
        "selectedUser",
        JSON.stringify(state.selectedData)
      );
    },
    updateFavorites: (state, action) => {
      state.selectedData = action.payload;
      window.localStorage.setItem(
        "selectedUser",
        JSON.stringify(state.selectedData)
      );
    },
  },
});

export default SelectedUser.reducer;
export const { sUser, updateFavorites } = SelectedUser.actions;
