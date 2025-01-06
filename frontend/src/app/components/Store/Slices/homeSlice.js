import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";

export const getHomeInfo=createAsyncThunk("/home",async()=>{
    const info= await axios.get(`${rooturl}/gethomeinfo`)
    return info.data;
})

const homeSlice=createSlice({
    name:"home",
    initialState:{info:[],isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getHomeInfo.pending,(state)=>{
state.isLoading=true
state.isError=false;

        })
        builder.addCase(getHomeInfo.fulfilled,(state,action)=>{
            state.info=action.payload;
            state.isLoading=false
            state.isError=false;

        })
        builder.addCase(getHomeInfo.rejected,(state)=>{
            state.isError=true;
            state.isLoading=false;
        })



    },
})
export default homeSlice.reducer;
