import { createSlice } from '@reduxjs/toolkit'

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        data: [],
    },
    reducers: {
        changeForecast: (state, action) => {
            state.data = action.payload;
        }
    },
})

export const { changeForecast } = forecastSlice.actions


export const selectForecast = (state: any) => state.forecast.data;

export default forecastSlice.reducer