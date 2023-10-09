import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"
import { deepClone, find, findIndex } from "../utils/array.js"
import BasketProducts from "../components/pages/orderPage/main/basket/BasketProducts.jsx";


export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    // 1. copie du state
    const basketCopy = deepClone(basket);

    const productFoundInBasket =
      find(productToAdd.id, basketCopy) !== undefined;

    // 1er cas : le produit n'est pas déjà dans le basket
    if (!productFoundInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }

    // 2ème cas : le produit est déjà dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
  };
  return { basket, handleAddToBasket };
};

