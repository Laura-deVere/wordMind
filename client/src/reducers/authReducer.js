import { SIGN_IN, SIGN_OUT, CREATE_USER } from "../actions/types";
// assign state to empty object initally
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload);
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        userName: action.payload.userName,
        avatarLink: action.payload.avatarLink,
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    // case CREATE_USER:
    //   return state;
    default:
      return state;
  }
};
