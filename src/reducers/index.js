import { combineReducers } from 'redux';
import  WeatherReducer from './reducer_request';

const rootReducer = combineReducers({
  weather : WeatherReducer
});

export default rootReducer;
