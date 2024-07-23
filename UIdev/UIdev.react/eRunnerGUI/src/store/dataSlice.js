/* 
@component Application - Data Redux Slice
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInitialData = createAsyncThunk(
  "data/fetchInitialData",
  async () => {
    const response = await fetch("/data/content/intro.json"); // hardcoded ID to fetch the data
    const data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));
    return data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: JSON.parse(localStorage.getItem("data")) || null,
    status: "idle",
    error: null,
    lastFetchTime: localStorage.getItem("lastFetchTime") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.lastFetchTime = Date.now();
        localStorage.setItem("lastFetchTime", Date.now());
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
