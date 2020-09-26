import * as firebase from "firebase";
import { wordsRef, dbRef } from "../config/firebase";

export const getUserWords = async (userID) => {
  return await dbRef
    .ref(`/words/${userID}`)
    .once("value")
    .then((snapshot) => {
      console.log("snapshot", snapshot.val().userWords);
      const response = snapshot.val().userWords;
      return [
        ...Object.keys(response).map((key) => {
          return {
            id: key,
            word: {
              data: response[key].word.data,
              sentences: response[key].word.sentences,
            },
          };
        }),
      ];
    });
};

export const createUserWord = async (newWord, userId) => {
  const newUserWord = await dbRef.ref(`/words/${userId}/userWords`).push();
  const wordkey = newUserWord.key;
  newUserWord.set({ word: newWord });

  const getWord = dbRef.ref(`/words/${userId}/userWords/${wordkey}`);
  let word;
  getWord.on("child_added", (res) => {
    word = {
      id: wordkey,
      word: {
        data: res.val().data,
        sentences: res.val().sentences,
      },
    };
  });

  return word;
};

export const createUserSentence = async (
  sentences,
  currentWordID,
  currentUserID
) => {
  let word;
  const getWord = dbRef.ref(
    `/words/${currentUserID}/userWords/${currentWordID}`
  );
  const newSentence = await dbRef.ref(
    `/words/${currentUserID}/userWords/${currentWordID}/word/sentences`
  );

  newSentence.set([...sentences]).then(() => {
    getWord.on("child_added", (res) => {
      return (word = {
        id: currentWordID,
        word: {
          data: res.val().data,
          sentences: res.val().sentences,
        },
      });
    });
  });
};
