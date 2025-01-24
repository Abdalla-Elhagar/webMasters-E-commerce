import { createSlice } from "@reduxjs/toolkit";
const LocalUser:any = localStorage.getItem("myUsers") ?  JSON.parse(localStorage.getItem("myUsers")) : [];


const ArrayOfUsers = createSlice({
    name: "ArrayOfUsers",
    initialState: {data: LocalUser},
    reducers: {
        myUsers:(state,action) => {
           
            state.data.push(action.payload) 
            
            window.localStorage.setItem("myUsers", JSON.stringify(state.data));

        }
    }
})


export default ArrayOfUsers.reducer;
export const {myUsers} = ArrayOfUsers.actions