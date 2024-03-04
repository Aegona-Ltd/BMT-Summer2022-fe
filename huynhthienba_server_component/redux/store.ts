import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/reducer";

const rootReducer = combineReducers({
  accounts: accountReducer,
});

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export let store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;
