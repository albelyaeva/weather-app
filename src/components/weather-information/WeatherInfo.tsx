import React from 'react';
import './styles.css';

const WeatherInfo = ({weatherData}: any) => (
    <div className='weather-info'>
        <ul>
            <li>
                <span>Feels Like</span>
                <span>{ Math.round(weatherData.main.feels_like)} °C</span>
            </li>
            <li>
                <span>Cloudy</span>
                <span>{weatherData.clouds.all}%</span>
            </li>
            <li>
                <span>Humidity</span>
                <span>{weatherData.main.humidity} °C</span>
            </li>
            <li>
                <span>Wind</span>
                <span>{weatherData.wind.speed} km/h</span>
            </li>
        </ul>
    </div>
)

export default WeatherInfo;