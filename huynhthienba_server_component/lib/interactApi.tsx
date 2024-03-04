import api from "@/configs/axios";
import { setAccounts } from "@/redux/features/accounts/action";
import { store } from "@/redux/store";

export const getAccounts = async () => {
  try {
    const response = await api.get("/users");
    store.dispatch(setAccounts(response.data));
    return response.data;
  } catch (error) {
    return null;
  }
};
