import { createReducer } from "@reduxjs/toolkit";
import { AccountsType, accountsReducerDefault } from "./type";
import { RootState } from "@/redux/store";
import { setAccounts } from "./action";

const countReducer = createReducer(accountsReducerDefault, (builder: any) => {
  builder.addCase(setAccounts, (state: AccountsType, action: any) => {
    state.accounts = action.payload;
  });
});

export const selectAccount = (state: RootState) => state.accounts;

export default countReducer;
