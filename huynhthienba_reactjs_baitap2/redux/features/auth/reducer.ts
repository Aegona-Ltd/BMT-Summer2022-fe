import { createReducer } from "@reduxjs/toolkit";
import { AuthType, authReducerDefault } from "./type";
import { RootState } from "@/redux/store";
import { clearDataLogin, setLastPathname, setLoginSuccess } from "./action";

const authReducer = createReducer(authReducerDefault, (builder) => {
  builder
    .addCase(setLoginSuccess, (state: AuthType, action: any) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(clearDataLogin, (state: AuthType) => {
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(setLastPathname, (state: AuthType, action: any) => {
      state.lastPathname = action.payload;
    });
});

export const selectAuth = (state: RootState) => state.auth;

export default authReducer;
