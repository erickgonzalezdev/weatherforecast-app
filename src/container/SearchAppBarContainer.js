import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchAppBar from './../components/MaterialUi/SearchAppBar'
import { setSelectedCity, setWeather } from './../actions'
import { connect } from 'react-redux';
import { getWeatherCities, getCity }  from './../reducer'



class SearchAppBarContainer extends Component {

    handledValueSearch = (value) => {
        const { setSelectedCity,setWeather} = this.props;

        setSelectedCity(value) ;

        setWeather([value]);
     
    }
    render() {

        return (
            <SearchAppBar  titulo="WeatherApp" valueSearch={this.handledValueSearch} />
        );
    }
}
SearchAppBarContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    citiesWeather: PropTypes.array,
    city:PropTypes.string,

}
const mapDispatchToProps = dispatch => ({     // regresa  un dispatch  como props al componente
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),


})
const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state),  
    city: getCity(state),
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchAppBarContainer);