import React, {useEffect} from 'react';
import WeatherForecastCard from './WeatherForecastCard';
import {useSelector, useDispatch} from 'react-redux';
import './styles.css';

import {selectForecast} from '../../features/forecastSlice/forecastSlice';


const WeatherForecast = () => {
    const forecastData = useSelector(selectForecast);
    console.log(forecastData);
    const listItems = forecastData.map((item: any) =>
        <WeatherForecastCard dateItem={item} key={item.dt}/>
    );

    return (
        <div className='forecast-list'>{listItems}</div>
    )

}

export default WeatherForecast;