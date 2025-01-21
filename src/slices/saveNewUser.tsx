import { createSlice } from "@reduxjs/toolkit";

const ArrayOfUsers = createSlice({
    name: "ArrayOfUsers",
    initialState: {data: JSON.parse(localStorage.getItem("myUsers")) || []},
    reducers: {
        myUsers:(state,action) => {
           
            let stateData = [...state.data , action.payload]
            state.data = stateData
            
            window.localStorage.setItem("myUsers", JSON.stringify(state.data));

        }
    }
})


export default ArrayOfUsers.reducer;
export const {myUsers} = ArrayOfUsers.actions