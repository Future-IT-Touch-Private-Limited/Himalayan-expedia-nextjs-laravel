"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const getpopularCity = createAsyncThunk(
  "/country",
  async (country) => {
    const res = await axios.get(`${rooturl}/singletours/${country}`);
    return res.data;
  }
);

const popularCity = createSlice({
  name: "singlecountry",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(getsinglecountry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getsinglecountry.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getsinglecountry.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default popularCity.reducer;
