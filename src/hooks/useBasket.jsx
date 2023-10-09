import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"
import { deepClone, find } from "../utils/array.js"


export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.SMALL)

    const handleAddToBasket = (productToAdd) => {
        // 1. copie du state
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket =  find(productToAdd.id, basketCopy) !== undefined

        // 2. manip de la copie du state
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }

            const basketUpdated = [newBasketProduct, ...basketCopy]

            // 3. update du state
            setBasket(basketUpdated)
        } else {
            const indexOfBasketProductToIncrement = basket.findIndex((basketProduct) => basketProduct.id === productToAdd.id)

            basketCopy[indexOfBasketProductToIncrement].quantity += 1

            setBasket(basketCopy)
        }
    }
    

    return { basket, handleAddToBasket }
}
