import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const globalState = {
  products:[]
};

const DashboardSlice= createSlice({
  name: "dashboard",
  initialState: globalState,
  reducers: {
    storeproducts: (state,actions) => {
      state.products = actions.payload;
    },
    
  },
});

export const { storeproducts} =DashboardSlice.actions;

export default DashboardSlice.reducer;
