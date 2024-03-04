import { AccountType } from "@/redux/features/accounts/type";
import { store } from "@/redux/store";

const HomeView = () => {
  const { accounts } = store.getState().accounts;

  return accounts.map((account: AccountType) => (
    <div key={account.id} className="flex items-center justify-between px-5">
      <div>{account.id}</div>
      <div>{account.email}</div>
      <div>{account.phone_number}</div>
      <div>{account.address}</div>
    </div>
  ));
};

export default HomeView;
