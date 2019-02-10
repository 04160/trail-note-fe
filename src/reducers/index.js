import { combineReducers } from 'redux';
import TrailsReducer from './trails';
import HomeReducer from './home';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  home: HomeReducer,
  form: formReducer
});

export default rootReducer;
