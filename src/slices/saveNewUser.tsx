import { createSlice } from "@reduxjs/toolkit";

const LocalUser: any = localStorage.getItem("myUsers")
  ? JSON.parse(localStorage.getItem("myUsers"))
  : [];

const ArrayOfUsers = createSlice({
  name: "ArrayOfUsers",
  initialState: { data: LocalUser },
  reducers: {
    myUsers: (state, action) => {
      state.data.push(action.payload);

      window.localStorage.setItem("myUsers", JSON.stringify(state.data));
    },
    myUsersWithNewPass: (state, action) => {
      state.data = action.payload;

      window.localStorage.setItem("myUsers", JSON.stringify(state.data));
    },
    myFavoriteIDs: (state, action) => {
      state.data = action.payload;

      window.localStorage.setItem("myUsers", JSON.stringify(state.data));
    },
    addToCartAction: (state, action) => {
      state.data = action.payload;

      window.localStorage.setItem("myUsers", JSON.stringify(state.data));
    },
  },
});

export default ArrayOfUsers.reducer;
export const { myUsers, myUsersWithNewPass, myFavoriteIDs, addToCartAction } =
  ArrayOfUsers.actions;
