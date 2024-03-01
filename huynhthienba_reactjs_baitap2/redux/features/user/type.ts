export type UserItemType = {
  username: string;
  email: string;
  password: string;
  address: string;
  phone_number: string;
  id: string;
};

export type UsersListType = {
  loading: boolean;
  users: UserItemType[];
};

export const userReducerDefault: UsersListType = {
  loading: true,
  users: [],
};
