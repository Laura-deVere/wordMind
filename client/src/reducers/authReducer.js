import { SIGN_IN, SIGN_OUT } from "./types";
// assign state to empty object initally
const INITIAL_STATE = {
  isSignedIn: null,
  //   userId: null,
  //   userName: null,
  userProfile: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userProfile: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userProfile: null };
    default:
      return state;
  }
};
