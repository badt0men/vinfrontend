import { vinReducer } from './vinSlice';
import { vehicleReportReducer } from './vehicleReportSlice';

export const appReducers = {
    vin: vinReducer,
    vehicleReport: vehicleReportReducer,
}