import { createSlice } from '@reduxjs/toolkit';

interface CompanyProps {
    name: string
}

const initialState: CompanyProps = {
    name: 'AEGONA'
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        
        

    },
});

export default companySlice.reducer;
