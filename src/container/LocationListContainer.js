import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setSelectedCity , setWeather} from './../actions';
import { getWeatherCities, getCity }  from './../reducer'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() 
    {
       const { setWeather, setSelectedCity , cities , city } = this.props;
     
        setWeather(cities); 
       setSelectedCity(city);
       
    }
    handleSelectedLocation = city => {
       
        this.props.setSelectedCity(city);  // este props la provee el mapDispatchToprops que se pasa en el connect
        
      }
    render() {
        return (
            
            <LocationList cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
              
        );
    }
}
LocationListContainer.propTypes={
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather: PropTypes.array, 
    city: PropTypes.string.isRequired,

  }
 
  const mapDispatchToProps = dispatch =>({     // regresa  un dispatch  como props al componente
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)) 
  });

  const mapStateToProps = state =>({
       citiesWeather: getWeatherCities(state),  
       city: getCity(state),
  })
  export default  connect(mapStateToProps ,mapDispatchToProps)(LocationListContainer);
