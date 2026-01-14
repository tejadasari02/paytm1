import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    currentUser: null,

   
  },
  reducers: {
    loginuser: (state, action) => {
     state.isLoggedIn = true;
     state.currentUser = action.payload;
    },
    logoutuser: (state, action) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    }
  },
});

export const { loginuser, logoutuser } = LoginSlice.actions;
export default LoginSlice.reducer;