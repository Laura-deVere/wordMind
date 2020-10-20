import { CREATE_USER_WORD, FETCH_USER_WORDS } from "../actions/types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_WORD:
      if (!action.payload) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case FETCH_USER_WORDS:
      return [...action.payload];
    default:
      return state;
  }
};
