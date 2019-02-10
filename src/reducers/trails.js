import {
  FETCH_TRAILS,
  FETCH_TRAIL
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRAILS:
      return {
        ...state,
        trails: action.payload[0].trails
      };
    case FETCH_TRAIL: {
      return {
        ...state,
        trail: action.payload[0].trail
      };
    }
    default:
      return state;
  }
};
