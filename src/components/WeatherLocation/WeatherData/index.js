import React from 'react';
import WeatherTemprature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherData = ({data}) => {
    const {temperature,weatherState,humidity,wind} =data;
    return(
    <div className="weatherDataCont">
        <WeatherTemprature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
    )
};
WeatherData.propTypes ={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
};
export default WeatherData;