import {
  SIGN_IN,
  SIGN_OUT,
  SEARCH_WORD,
  CREATE_WORD,
  UPDATE_WORD,
  SET_USER_WORD,
  FETCH_USER_WORDS,
} from "../actions/types";
import axios from "../apis/dictionary";
import { wordsRef, dbRef } from "../config/firebase";
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
  // const id = wordsRef.push().key;
  wordsRef.push().set(newWord);
  // const id = addtodb.key;

  // const word = {};
  // word[id] = { data: newWord };

  // dispatch({
  //   type: CREATE_WORD,
  //   payload: word,
  // });
  await wordsRef.on("value", (snapshot) => {
    dispatch({
      type: CREATE_WORD,
      payload: snapshot.val(),
    });
  });
};

export const setUserWord = (word) => async (dispatch) => {
  console.log("set user word", word);
  const wordRes = await dbRef
    .ref(`/words/${word.id}`)
    .once("value")
    .then((snapshot) => {
      console.log("snapshot", snapshot.key);
      const wordObject = {
        id: snapshot.key,
        data: snapshot.val(),
      };
      dispatch({
        type: SET_USER_WORD,
        payload: wordObject,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateWord = (updates) => async (dispatch) => {
  await wordsRef
    .update(updates)
    .then((res) => {
      dispatch({
        type: UPDATE_WORD,
        payload: updates,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
// Firebase
