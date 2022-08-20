import { createSlice } from '@reduxjs/toolkit';
import { AsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: 'idle',
    error: null,
}

export const vehicleReportSlice = createSlice({
    name: 'vehicleReport',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    },
})
