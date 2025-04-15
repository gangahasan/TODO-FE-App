import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: localStorage.getItem("user")|| null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSignUp: (state, action) => {
      state.user = action.payload;
    },
    authLogin: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    authLogout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { authSignUp, authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;
