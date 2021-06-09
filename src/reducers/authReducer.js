import { createSlice } from "@reduxjs/toolkit";

const authState = {
  username: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
