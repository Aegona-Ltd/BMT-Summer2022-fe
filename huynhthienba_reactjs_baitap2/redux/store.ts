import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleReducer from "./features/example/reducer";

const persistConfig = {
  key: "next-app",
  storage,
  whitelist: ["storage"],
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
  });
};

export let store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
