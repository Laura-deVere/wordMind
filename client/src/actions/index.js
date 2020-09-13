import { SIGN_IN, SIGN_OUT } from "../reducers/types";

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
