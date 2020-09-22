import { SET_USER_WORD, UPDATE_WORD } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_WORD:
      return { ...state, ...action.payload };
    case UPDATE_WORD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
