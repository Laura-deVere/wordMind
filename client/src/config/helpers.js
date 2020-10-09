import * as firebase from "firebase";
import { wordsRef, dbRef, fireStore } from "../config/firebase";

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

export const createUserWord = async (wordId, newWord, userId) => {
  await dbRef
    .ref(`/words/${userId}/userWords/${wordId}`)
    .once("value", (snapshot) => {
      let exists = snapshot.val() !== null;
      console.log("exists", exists);
      if (exists) {
        return {};
      } else {
        let word;
        const newUserWord = dbRef.ref(`/words/${userId}/userWords/${wordId}`);
        const wordkey = newUserWord.key;
        newUserWord.set({ word: newWord });

        const getWord = dbRef.ref(`/words/${userId}/userWords/${wordkey}`);
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
      }
    });
};

export const deleteUserWord = async (wordId, currentUserID) => {
  const ref = dbRef.ref(`/words/${currentUserID}/userWords/${wordId}`);
  return await ref
    .remove()
    .then(() => {
      console.log("removed");
    })
    .catch((error) => {
      console.log("Remove failed: " + error.message);
    });
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
