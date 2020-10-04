import { SET_USER_WORD, CREATE_SENTENCE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_WORD:
      return { ...state, ...action.payload };
    case CREATE_SENTENCE:
      console.log("new sentence", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
