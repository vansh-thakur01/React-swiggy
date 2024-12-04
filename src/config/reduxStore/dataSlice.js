import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"data",
    initialState:{
        value:"i am here ok",
    },
    reducers:{
        addData:(state,action)=>{
            state.value.push("name");
        }
    }
})

export const {addData} = dataSlice.actions;
export default dataSlice.reducer;