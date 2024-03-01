import { UserItemType } from "../user/type";

export interface AuthType {
  isAuthenticated: boolean;
  user: UserItemType | null;
}

export const authReducerDefault: AuthType = {
  isAuthenticated: false,
  user: null,
};
