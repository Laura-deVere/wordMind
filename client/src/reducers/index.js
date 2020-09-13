import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dictionaryReducer from "./dictionaryReducer";

export default combineReducers({
  auth: authReducer,
  word: dictionaryReducer,
});
