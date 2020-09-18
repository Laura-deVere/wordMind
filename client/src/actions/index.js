import {
  SIGN_IN,
  SIGN_OUT,
  SEARCH_WORD,
  CREATE_WORD,
  SET_USER_WORD,
  FETCH_USER_WORDS,
} from "../actions/types";
import { wordsRef } from "../config/firebase";
import axios from "../apis/dictionary";
const DICTIONARY_KEY = process.env.REACT_APP_API_KEY;

// Google Auth
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = (userId) => {
  return {
    type: SIGN_OUT,
    payload: userId,
  };
};

// flip state boolean to true or false
// Google Auth

// dictionary
// First create an action
export const searchWord = (term) => async (dispatch) => {
  // call axios.get to make an http request
  const response = await axios.get(`/${term}?key=${DICTIONARY_KEY}`);
  console.log(response);
  // dispatch an action and send it to the reducer to update the state
  dispatch({ type: SEARCH_WORD, payload: response.data });
};
// dictionary

// Firebase
export const fetchWords = () => async (dispatch) => {
  await wordsRef.on("value", (snapshot) => {
    dispatch({
      type: FETCH_USER_WORDS,
      payload: snapshot.val(),
    });
  });
};

export const createWord = (newWord) => async (dispatch) => {
  (await wordsRef.push()).set(newWord);
};

export const setUserWord = (word) => {
  return {
    type: SET_USER_WORD,
    payload: word,
  };
};
// Firebase
