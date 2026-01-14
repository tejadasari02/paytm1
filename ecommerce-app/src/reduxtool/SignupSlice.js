import { createSlice } from "@reduxjs/toolkit";
const SignupSlice = createSlice({
  name: "signup",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = SignupSlice.actions;
export default SignupSlice.reducer;
