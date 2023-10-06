import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.LARGE)
    return { basket }
}
