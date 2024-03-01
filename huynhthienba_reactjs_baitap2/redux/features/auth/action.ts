import { createAction } from "@reduxjs/toolkit";
import { UserItemType } from "../user/type";

export const setLoginSuccess = createAction<UserItemType>(
  "auth/set-login-success"
);

export const clearDataLogin = createAction("auth/clear-data-login");
export const setLastPathname = createAction<string>("auth/set-last-pathname");
