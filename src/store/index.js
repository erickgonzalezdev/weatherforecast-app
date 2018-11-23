import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import  reducer  from './../reducer'

const initializate ={
    city: 'Ciudad Guayana,ve'
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(reducer, initializate, composeEnhancers(applyMiddleware(thunk)));
