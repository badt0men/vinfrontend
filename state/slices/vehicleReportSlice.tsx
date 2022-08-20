import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchVinData = createAsyncThunk(
    'vin-report/data',
    async (vin:string, thunkAPI) => {
    const res = await fetch(process.env.VIN_URI + vin + `?apikey=` + process.env.VIN_API_KEY)
    const data = await res.json()
        return data;
});

interface VinData { 
    data: Array<string>;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: undefined | string;
}
const initialState: VinData = {
    data: [],
    loading: 'idle',
    error: undefined,
}

export const vehicleReportSlice = createSlice({
    name: 'vehicleReport',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchVinData.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchVinData.fulfilled, (state, action) => {
            state.loading = 'idle'
            state.data = action.payload
            const vin = localStorage.getItem('vin')
            const vinData = Object.assign(action.payload, {vin})
            localStorage.setItem('vin-data', JSON.stringify(vinData))
        })
        builder.addCase(fetchVinData.rejected, (state, action) => {
            state.loading = 'idle'
            state.error = action.error.message
        })
    },
})

export const vehicleReportReducer = vehicleReportSlice.reducer;