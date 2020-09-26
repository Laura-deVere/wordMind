import { SET_USER_WORD, CREATE_SENTENCE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_WORD:
      console.log("words reducer", action.payload);
      return { ...state, ...action.payload };
    case CREATE_SENTENCE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
