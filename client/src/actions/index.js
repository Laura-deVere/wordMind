import {
  SIGN_IN,
  SIGN_OUT,
  SEARCH_WORD,
  CREATE_USER_WORD,
  DELETE_USER_WORD,
  CREATE_SENTENCE,
  SET_USER_WORD,
  FETCH_USER_WORDS,
} from "../actions/types";
import axios from "../apis/dictionary";
import { fireStore } from "../config/firebase";
import {
  getUserWords,
  createUserWord,
  deleteUserWord,
  createUserSentence,
  setCurrentUserWord,
} from "../config/helpers";
const DICTIONARY_KEY = process.env.REACT_APP_API_KEY;

// Google Auth
export const signIn = (userId, userName, avatarLink) => async (dispatch) => {
  const userRef = fireStore.collection("words").doc(userId);

  userRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        fireStore.collection("words").doc(userId).set({ userName, avatarLink });
      } else {
        console.log("already exists");
      }
    })
    .then(() => {
      dispatch({
        type: SIGN_IN,
        payload: { userId, userName, avatarLink },
      });
    });
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
  // dispatch an action and send it to the reducer to update the state
  dispatch({ type: SEARCH_WORD, payload: response.data });
};
// dictionary

// Firebase
export const fetchWords = (userID) => async (dispatch) => {
  const response = await getUserWords(userID);
  dispatch({
    type: FETCH_USER_WORDS,
    payload: response,
  });
};

export const createWord = (word, newWord, userId) => async (dispatch) => {
  const response = await createUserWord(word, newWord, userId);
  dispatch({
    type: CREATE_USER_WORD,
    payload: response,
  });
};

export const deleteWord = (word, wordId, currentUserID) => async (dispatch) => {
  const response = await deleteUserWord(wordId, currentUserID);
  dispatch({
    type: DELETE_USER_WORD,
    payload: word,
  });
};

export const setUserWord = (wordId, currentUserID) => async (dispatch) => {
  const response = await setCurrentUserWord(wordId, currentUserID);
  dispatch({ type: SET_USER_WORD, payload: response });
};

export const createSentence = (
  sentences,
  currentWordID,
  currentUserID
) => async (dispatch) => {
  const response = await createUserSentence(
    sentences,
    currentWordID,
    currentUserID
  );
  dispatch({
    type: CREATE_SENTENCE,
    payload: response,
  });
};
