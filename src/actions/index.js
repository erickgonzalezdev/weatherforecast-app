import transformforcast from './../services/transformForcast';
import transformWeather from './../services/transformWeather';
export const SET_CITY ="SET_CITY";
export const SET_FORECAST_DATA="SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY"
export const SET_WEATHER = "SET_WEATHER"
export const SET_WEATHER_CITY = "SET_WEATHER_CITY"
export const REMOVE_WEATHER_CITY = "REMOVE_WEATHER_CITY"
const setCity=(payload)=>(  { type: SET_CITY, payload});
const setForecastData= payload => ({ type: SET_FORECAST_DATA, payload});

export const getWeatherCity =  payload =>({ type: GET_WEATHER_CITY , payload});
export const setWeatherCity =  payload => ({ type: SET_WEATHER_CITY , payload})

const key = "916c62838ac3fe28f6e25e6269b8ea5a";
const url = "https://api.openweathermap.org/data/2.5/forecast";


const urlWeather ="https://api.openweathermap.org/data/2.5/weather";


export const setSelectedCity = payload => {
    return (dispatch, getState) =>{
       
        const url_fortcast = `${url}?q=${payload}&appid=${key}`;
        //busqueda de Datos en el API
        dispatch(setCity(payload));
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        if ( date && ( now - date ) < 1 * 60 * 1000){
            return ;
        }
        return fetch(url_fortcast).then(
            data => (data.json()).then(
                weather_data => {
                    /* console.log(weather_data); */
                    const forecastData = transformforcast(weather_data);
                   /*  console.log(forecastData)  */
                   //modificamos el estado con el resultado de la promise (fetch)
                   dispatch(setForecastData({city: payload, forecastData}));
                }
            )
        ).catch(function(e) {
            return e;
        });
        
    }
}

export const setWeather = payload => {
     return (dispatch) => {
         
         payload.forEach(city =>{
            
            dispatch(getWeatherCity(city));
         
        
            const api_weather = `${urlWeather}?q=${city}&appid=${key}`;
             fetch(api_weather).then( data => {
                return data.json();
        
            }).then( weather_data => {
               
                const data = transformWeather(weather_data);  
              /*   console.log(city);
                console.log(data);
                debugger; */
                dispatch(setWeatherCity({city, data}));
               
            }).catch(function(e) {
                window.alert("Ciudad no Encontrada");
            })
      
        }); 
     }
    

};
