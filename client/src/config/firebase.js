import * as firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "wordmind-289222.firebaseapp.com",
  databaseURL: "https://wordmind-289222.firebaseio.com",
  projectId: "wordmind-289222",
  storageBucket: "wordmind-289222.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_KEY,
  appId: process.env.REACT_APP_APPID_KEY,
  measurementId: process.env.REACT_APP_MEASUREMENTID_KEY,
};
// REACT_APP_AUTH_DOMAIN_KEY =
// REACT_APP_DATABASEURL_KEY =
// REACT_APP_PROJECTID_KEY = wordmind - 289222
// REACT_APP_STORAGEBUCK_KEY =
// REACT_APP_MESSAGINGSENDERID_KEY = 930494171277
// REACT_APP_APPID_KEY = 1:930494171277:web:2c8e2ef127fad0c50cfac4
// REACT_APP_MEASUREMENTID_KEY = G - R6E53XXQHD
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const databaseRef = firebase.database().ref();
export const wordsRef = databaseRef.child("words");
// export default firebaseConfig;
