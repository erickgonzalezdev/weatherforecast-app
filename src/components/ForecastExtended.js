import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForcastItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';


 const  renderForcastItemDays =(forecastData) => {
        return (
            forecastData.map(forecast => (
                
                <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} 
                />
            )
            )
        )
    }
 const   renderProgress = () => {
        return <div className="circularProgress">
            <CircularProgress/>
            </div>
    }

 const ForecastExtended=({ city, forecastData}) =>(
  
     
            <div>
                <h2 className="forcast-title">
                    Pronostico Extendido
                </h2>
                <h1 className="forcast-city">
                    {city}
                </h1>
                
                {forecastData ? 
                renderForcastItemDays(forecastData) : 
                renderProgress()}

            </div>
        
    
 )
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}
export default ForecastExtended;