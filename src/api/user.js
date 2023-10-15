import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config.js"
import { fakeMenu } from "../fakeData/fakeMenu.js";

export const getUser = async (idUser) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser);

  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const userReceived = docSnapShot.data()
    return userReceived
  }
};


export const createUser = (userId) => {
    const docRef = doc(db, "users", userId);

    const nourriture = {
        username: userId,
        menu: fakeMenu.LARGE
    }

  setDoc(docRef, nourriture)
}
