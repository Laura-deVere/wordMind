import { SET_USER_WORD, UPDATE_WORD } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_WORD:
      console.log(action.payload);
      return { ...state, ...action.payload };
    case UPDATE_WORD:
      console.log(action.payload);
      // const wordid = Object.keys(action.payload)[0];
      // const data = action.payload[wordid];
      // console.log(data);
      return {
        // id: wordid,
        // data: data,
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
