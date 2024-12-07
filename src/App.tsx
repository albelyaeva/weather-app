import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherContainer from './components/Weather';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {selectCount} from './features/weatherSlice/weatherSlice';
import {changeForecast} from './features/forecastSlice/forecastSlice';
import moment from "moment";

function App() {
  const [lat, setLat] = useState<number>(51.5085);
  const [long, setLong] = useState<number>(-0.1257);
  const [data, setData] = useState<object>({});
  const [isLoading, setIsLoading] = useState(true);
  const test =  useSelector(selectCount);
  const dispatch = useDispatch();

    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    });

    const processData = (date: string) => {
        return moment(date).format('DD MMMM YYYY, H:mm:ss').toString()
    }

  useEffect(() => {
    if (lat && long && test.length == 0 ) {
        axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            });
        axios.get(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&cnt=32&appid=${process.env.REACT_APP_API_KEY}`)
            .then(data => {
                if (data) {
                    const arrForecast:any = [];
                    const firstDay = moment().add(1, 'days').format('DD MMMM YYYY, 12:00:00').toString();
                    const secondDay = moment().add(2, 'days').format('DD MMMM YYYY, 12:00:00').toString();
                    const thirdDay = moment().add(3, 'days').format('DD MMMM YYYY, 12:00:00').toString();
                    data.data.list.map((item: any) => {
                        console.log(moment(item.dt_txt).format('DD MMMM YYYY, h:mm:ss').toString(), moment().add(1, 'days').format('DD MMMM YYYY, 12:00:00').toString())
                        if (processData(item.dt_txt) === firstDay
                            || processData(item.dt_txt) === secondDay
                            || processData(item.dt_txt) === thirdDay
                        ) {
                            arrForecast.push(item)
                        }
                    })
                    dispatch(changeForecast(arrForecast));
                }
            })
    }
    console.log(lat, long)

  }, [lat, long]);

  useEffect(() => {
      if (test.length > 0) {
          setIsLoading(true);
          const testName = test.toString().toLowerCase();
          axios.get(`${process.env.REACT_APP_API_URL}/weather?q=${testName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
              .then(res => {
                  setData(res.data);
                  setIsLoading(false);
              });
          axios.get(`${process.env.REACT_APP_API_URL}/forecast?q=${testName}&units=metric&cnt=24&appid=${process.env.REACT_APP_API_KEY}`)
              .then(data => {
                  if (data) {
                      dispatch(changeForecast(data.data.list.filter((e: any, i: number) => (i+4) % 8 === 0)));
                  }
              })
      }
  }, [test])

  return (
    <div className="App">
      {!isLoading &&
          <WeatherContainer weatherData={data}/>
      }
        {
            isLoading &&
            <div className='app-loader'/>
        }
    </div>
  );
}

export default App;
