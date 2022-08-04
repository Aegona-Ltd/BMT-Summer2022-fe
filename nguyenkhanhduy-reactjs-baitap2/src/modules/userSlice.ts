import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../shared/interfaces/user';
interface UserProps {
    currentUser: User
}

const initialState: UserProps = {
    currentUser: {
        id: '',
        email: '',
        password: '',
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        login: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload
        },
        signOut: (state) => {
            state.currentUser = {
                id: '',
                email: '',
                password: '',
            }
        }

    },
});

export default userSlice.reducer;

export const { login, signOut } = userSlice.actions;