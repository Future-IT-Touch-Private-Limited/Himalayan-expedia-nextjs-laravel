"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const getpopularCity = createAsyncThunk(
  "/popularcities",
  async (country) => {
    const res = await axios.get(`${rooturl}/popular-cities`);
    console.log('wrfrwfr',res.data)
    return res.data;
  }
);

const popularCity = createSlice({
  name: "popularcities",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(getpopularCity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getpopularCity.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getpopularCity.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default popularCity.reducer;
