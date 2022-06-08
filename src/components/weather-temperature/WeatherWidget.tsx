import React from 'react';
import './styles.css';
import backgroundConfig from '../../config/background-config';


const WeatherWidget = ({weatherData}: any) => {
    let imgName;
    const weatherMain = weatherData.weather[0].main;
    if (weatherMain in backgroundConfig) {
        imgName = backgroundConfig[weatherMain as keyof typeof backgroundConfig];
    }
    else imgName = 'clouds.jpeg';
    return (
        <div className='weather-widget' style={{ backgroundImage: `url('/backgrounds/${imgName}')` }}>
            <div className='weather-container__data'>
                <div className='weather-container__name'>
                    <h1>{weatherData.name}</h1>
                </div>
                <div className='icon'>
                    {weatherData.weather &&
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt="weather-icon"
                        />
                    }
                </div>
                <div className='description'>
                    {weatherData.weather[0].description}
                </div>
            </div>
            <div className='weather-container__temperature'>
                <div className='temperature'>
                    <span>{Math.round(weatherData.main.temp)}</span><span>°C</span>
                </div>
                <div className='minmax-temp'>
                    <div>min</div>
                    <div>max</div>
                </div>
                <div className='minmax-temp'>
                    <div>{Math.round(weatherData.main.temp_min)}°C</div>
                    <div>{Math.round(weatherData.main.temp_max)}°C</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;