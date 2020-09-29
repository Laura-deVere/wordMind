import * as firebase from "firebase";
import { wordsRef, dbRef } from "../config/firebase";

export const getUserWords = async (userID) => {
  return await dbRef
    .ref(`/words/${userID}`)
    .once("value")
    .then((snapshot) => {
      if (snapshot.val()) {
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
      } else {
        return [];
      }
    })
    .catch((error) => console.error());
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

export const setCurrentUserWord = async (wordId, currentUserID) => {
  let word;
  const ref = dbRef.ref(`/words/${currentUserID}/userWords/${wordId}/word`);
  return await ref.once("value").then((snapshot) => {
    console.log(snapshot.val().data);
    word = {
      id: wordId,
      word: {
        data: snapshot.val().data,
        sentences: snapshot.val().sentences,
      },
    };
    console.log(word);
    return word;
  });
};

export const createUserSentence = async (
  sentences,
  currentWordID,
  currentUserID
) => {
  const getWord = dbRef.ref(
    `/words/${currentUserID}/userWords/${currentWordID}/word`
  );
  const newSentence = await dbRef
    .ref(`/words/${currentUserID}/userWords/${currentWordID}/word/sentences`)
    .set([...sentences]);

  return await getWord.once("value").then((snapshot) => {
    return {
      id: currentWordID,
      word: {
        data: snapshot.val().data,
        sentences: snapshot.val().sentences,
      },
    };
  });
};
