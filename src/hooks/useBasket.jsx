import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket.js"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD)
    return { basket }
}
