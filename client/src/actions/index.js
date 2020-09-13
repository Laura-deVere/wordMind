import { SIGN_IN, SIGN_OUT, FETCH_WORD } from "../reducers/types";

import axios from "../apis/dictionary";
const DICTIONARY_KEY = process.env.REACT_APP_API_KEY;

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// flip state boolean to true or false

// First create an action
export const fetchWord = (term) => async (dispatch) => {
  // call axios.get to make an http request
  const response = await axios.get(`/${term}?key=${DICTIONARY_KEY}`);
  console.log(response);
  // dispatch an action and send it to the reducer to update the state
  dispatch({ type: FETCH_WORD, payload: response.data });
};
