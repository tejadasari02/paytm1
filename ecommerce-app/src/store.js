import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "./reduxtool/SignupSlice.js";
import  LoginSlice  from "./reduxtool/LoginSlice.js";
import DashboardSlice from "./reduxtool/DashboardSlice.js";


const store = configureStore({
  reducer: {
    signup: SignupSlice,
    login: LoginSlice,
    dashboard: DashboardSlice,
  },
});

export default store;
