export type AccountType = {
  username: string;
  email: string;
  password: string;
  address: string;
  phone_number: string;
  id: string;
};

export type AccountsType = {
  accounts: any;
};

export const accountsReducerDefault: AccountsType = {
  accounts: [],
};
