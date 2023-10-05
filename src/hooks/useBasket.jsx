import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    return {basket }
}