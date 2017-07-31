import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginStatus from './LoginReducer';
import planetList from './PlanetReducer';

export default combineReducers({
  routing: routerReducer,
  loginStatus,
  planetList,
});
