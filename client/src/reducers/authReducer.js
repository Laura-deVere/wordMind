import { SIGN_IN, SIGN_OUT } from "../actions/types";
// assign state to empty object initally
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
    console.log(action.payload)
      return {
        isSignedIn: true,
        ...action.payload
      };
    case SIGN_OUT:
      return { isSignedIn: false, userId: null };
    default:
      return state;
  }
};
