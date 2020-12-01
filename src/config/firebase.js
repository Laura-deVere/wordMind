import firebase from "firebase";
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const databaseRef = firebase.database();
export const dbRef = firebase.database();
export const wordsRef = databaseRef.ref().child("words");
export const fireStore = firebase.firestore();
