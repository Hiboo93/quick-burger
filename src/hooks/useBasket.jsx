import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"
import { deepClone, removeObjectById, findIndexById, findObjectById } from "../utils/array.js"
import { setLocalStorage } from "../utils/window.js";



export const useBasket = () => {
  const [basket, setBasket] = useState([]);

   const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
   }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy )
  };

  const  createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};



