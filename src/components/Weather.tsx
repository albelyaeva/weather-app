import React from 'react';
import './weather.css';
import WeatherWidget from './weather-temperature/WeatherWidget';
import WeatherInfo from './weather-information/WeatherInfo';
import Header from './header/Header';
import WeatherForecast from './weather-forecast/WeatherForecast';

const WeatherContainer = ({weatherData}: any) => {
    return (
        <div className='weather-app'>
            <div className='background-image'/>
            <div className='weather-app-container'>
                <Header />
                <div className='weather-container'>
                    <WeatherWidget weatherData={weatherData} />
                    <WeatherInfo weatherData={weatherData} />
                </div>
                <div className='weather-app-container__forecast'>
                    <span className='forecast-name'> 3 Day Weather Forecast</span>
                    <WeatherForecast />
                </div>
            </div>
        </div>
    )
}



export default WeatherContainer;