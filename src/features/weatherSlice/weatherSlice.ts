import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        location: '',
    },
    reducers: {
        changeLocation: (state, action) => {
            state.location = action.payload;
        }
    },
})

export const { changeLocation } = weatherSlice.actions


export const selectCount = (state: any) => state.weather.location;

export default weatherSlice.reducer