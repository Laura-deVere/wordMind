import { SEARCH_WORD } from "../actions/types";
const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return [...action.payload];
    default:
      return state;
  }
};
