import React from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';



import './styles.css'

/*
const key = "916c62838ac3fe28f6e25e6269b8ea5a";
const url ="http://api.openweathermap.org/data/2.5/weather";
componentWillMount() {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${key}`;
    fetch(api_weather).then(data => {
        return data.json();

    }).then(weather_data => {

        const data = transformWeather(weather_data);
        this.setState({ data });


    })
}

*/

const WeatherLocation =({onWeatherLocationClick, city, data})=>{
  
            return <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data} /> :
                    <CircularProgress  />}
            </div> 
}

WeatherLocation.propTypes ={
 city : PropTypes.string,
 onWeatherLocationClick: PropTypes.func,
 data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
})
}
export default WeatherLocation;