import { CREATE_WORD, FETCH_USER_WORDS, SET_USER_WORD } from "../actions/types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_WORD:
      return [
        ...state,
        ...Object.keys(action.payload).map((key) => {
          return { id: key, data: action.payload[key] };
        }),
      ];
    case FETCH_USER_WORDS:
      console.log(action.payload);
      return [
        ...state,
        ...Object.keys(action.payload).map((key) => {
          return { id: key, data: action.payload[key] };
        }),
      ];
    default:
      return state;
  }
};
