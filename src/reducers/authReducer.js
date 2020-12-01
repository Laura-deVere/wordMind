import { SIGN_IN, SIGN_OUT, UPDATE_POINTS, UPDATE_COMPLETED } from "../actions/types";
// assign state to empty object initally
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        isSignedIn: true,
        ...action.payload
      };
    case SIGN_OUT:
      return { isSignedIn: false, userId: null };
    case UPDATE_POINTS:
        return {...state, points: action.payload} 
    case UPDATE_COMPLETED:
        return {...state, wordsCompleted: action.payload }    
    default:
      return state;
  }
};
