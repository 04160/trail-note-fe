import { combineReducers } from 'redux';
import TrailsReducer from './trails';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  form: formReducer
});

export default rootReducer;
