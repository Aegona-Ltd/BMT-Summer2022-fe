import { combineReducers } from '@reduxjs/toolkit';
import companySlice from './companySlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
    user: userSlice,
    company:companySlice,
});

export default rootReducer