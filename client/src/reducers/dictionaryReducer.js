import { FETCH_WORD } from "./types";
const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WORD:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
