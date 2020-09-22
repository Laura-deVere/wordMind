import { CREATE_WORD, FETCH_USER_WORDS } from "../actions/types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_WORD:
      return [
        ...Object.keys(action.payload).map((key) => {
          return {
            id: key,
            data: {
              data: action.payload[key].data,
              userID: action.payload[key].userID,
              sentences: action.payload[key].sentences,
            },
          };
        }),
      ];
    case FETCH_USER_WORDS:
      return [
        ...Object.keys(action.payload).map((key) => {
          return {
            id: key,
            data: {
              data: action.payload[key].data,
              userID: action.payload[key].userID,
              sentences: action.payload[key].sentences,
            },
          };
        }),
      ];
    default:
      return state;
  }
};
