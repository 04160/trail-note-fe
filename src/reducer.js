import trails from './reducers/trails';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  trails,
  router: routerReducer
});
