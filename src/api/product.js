import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config.js"

export const syncBothMenus = (userId, menuUpdated) => {
    const cachette = doc(db, "users", userId)

    const nourriture = {
        username: userId,
        menu: menuUpdated,
    }
  setDoc(cachette, nourriture)
}


export const getMenu = async (idUser) => {
    //const docRef = doc(CHEMIN)
    const docRef = doc(db, "users", idUser);
  
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      const { menu } = docSnapShot.data();
      return menu;
    }
  };