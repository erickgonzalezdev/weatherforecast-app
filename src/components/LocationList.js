import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css';


const LocationList = ({ cities , onSelectedLocation}) => {

    const handleWeatherLocationClick = city =>{
      
        onSelectedLocation(city);
    }

    const strToComponent = cities => (
        cities.map(city =>
             (
              city.data &&
             <WeatherLocation 
             key={city.key} 
             city={city.name} 
             onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
             data={city.data}
             />  )
             )
    );
    return (
    <div className="locationList">
         <h2 className="list-title">
                    Pronostico Actual
                </h2>
        {strToComponent(cities)}
    </div>
    )

};
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;