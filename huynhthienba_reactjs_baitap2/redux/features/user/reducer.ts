import { createReducer } from "@reduxjs/toolkit";
import { UsersListType, userReducerDefault } from "./type";
import { RootState } from "@/redux/store";
import { getUsersList } from "./action";

const userReducer = createReducer(userReducerDefault, (builder: any) => {
  builder
    .addCase(getUsersList.pending, (state: UsersListType) => {
      state.loading = true;
    })
    .addCase(getUsersList.fulfilled, (state: UsersListType, action: any) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getUsersList.rejected, (state: UsersListType) => {
      state.loading = false;
    });
});

export const selectUser = (state: RootState) => state.user;

export default userReducer;
