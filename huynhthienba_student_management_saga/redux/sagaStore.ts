import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import studentReducer from "./features/management/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { rootSagas } from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  student: studentReducer,
});

const sagaStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export default sagaStore;

export type RootState = ReturnType<typeof sagaStore.getState>;
