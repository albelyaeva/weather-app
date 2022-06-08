import React from 'react';
import moment from 'moment';


const WeatherForecastCard = ({dateItem}: any) => {
    return (
        <div className='forecast-card'>
            <div className='forecast-card__time'>
                <div>{moment(dateItem.dt_txt).format('dddd')}</div>
                <div>{moment(dateItem.dt_txt).format('MMM Do YY')}</div>
            </div>
            <div className='forecast-card__icon'>
                <img
                    src={`http://openweathermap.org/img/wn/${dateItem.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                />
            </div>
            <div className='forecast-card__temp'>
                {Math.round(dateItem.main.temp)} °C
            </div>
        </div>
    )

}

export default WeatherForecastCard;