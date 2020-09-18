import { SET_USER_WORD } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_WORD:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
