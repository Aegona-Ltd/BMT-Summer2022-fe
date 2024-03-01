import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import todoReducer from "./features/todo/reducer";
import { storage } from "@/configs/storage";
import userReducer from "./features/user/reducer";
import authReducer from "./features/auth/reducer";

const persistConfig = {
  key: "next-app",
  storage,
  whitelist: ["todo", "auth"],
};

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export let store = createStore();
export const persistor = persistStore(store);
export const refreshStore = () => {
  store = createStore();
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;
