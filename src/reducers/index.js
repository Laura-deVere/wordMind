import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dictionaryReducer from "./dictionaryReducer";
import wordReducer from "./wordReducer";
import wordsReducer from "./wordsReducer";

export default combineReducers({
  auth: authReducer,
  searchResult: dictionaryReducer,
  words: wordsReducer,
  currentWord: wordReducer,
});
