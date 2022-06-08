import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherSlice/weatherSlice';
import forecastReducer from '../features/forecastSlice/forecastSlice';

export default configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer
    },
});