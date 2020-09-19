import {
  CREATE_WORD,
  FETCH_USER_WORDS,
  SET_USER_WORD,
  UPDATE_WORD,
} from "../actions/types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  let newState;
  switch (action.type) {
    case CREATE_WORD:
      console.log(action.payload);
      if (action.payload !== null) {
        newState = [
          ...state,
          ...Object.keys(action.payload).map((key) => {
            return {
              id: key,
              data: action.payload[key].data,
              userID: action.payload[key].userID,
              sentences: action.payload[key].sentences,
            };
          }),
        ];
      } else {
        return state;
      }
    case FETCH_USER_WORDS:
      console.log("WORDS BEING FETCHED");
      if (action.payload !== null) {
        newState = [
          ...state,
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
      } else {
        return state;
      }
      console.log("new state wordsREducre", newState);
      return newState;
    default:
      return state;
  }
};
