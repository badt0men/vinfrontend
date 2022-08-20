import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface VIN {
    value: string;
}
const initialState: VIN = {
    value: "",
}
export const vinSlice = createSlice({
    name: "vin",
    initialState,
    reducers: {
        setVin: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
            localStorage.setItem("vin", action.payload);
        }
    }
});

export const { setVin } = vinSlice.actions;
export default vinSlice.reducer;