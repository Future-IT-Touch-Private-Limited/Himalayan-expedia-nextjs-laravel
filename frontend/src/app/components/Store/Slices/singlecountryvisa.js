"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rooturl } from "../Rooturl";
import { createSlice } from "@reduxjs/toolkit";

export const getSingleCountryvisa = createAsyncThunk(
  "/singlecountryvisa",
  async (slug) => {
    const res = await axios.get(`${rooturl}/singletours/${slug}`);

    return res.data;
  }
);

const singleCountryvisaSlice = createSlice({
  name: "singlecountryvisa",
  initialState: { data: [], isLoading: false, isError: false },
  extraReducers: (builder) => {
    builder.addCase(getSingleCountryvisa.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleCountryvisa.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getSingleCountryvisa.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default singleCountryvisaSlice.reducer;
