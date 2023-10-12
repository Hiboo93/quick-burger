import styled from "styled-components";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/maths.js";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import EmptyBasket from "./EmptyBasket.jsx";
import BasketProducts from "./BasketProducts.jsx";
import { theme } from "../../../../../theme/index.js";
import { isEmpty } from "../../../../../utils/array.js";


export default function Basket() {
  const { basket, isModeAdmin, handleDeleteBasketProduct } = useContext(OrderContext);

  const isBasketEmpty = isEmpty(basket);

  const sumToPay = basket.reduce((total, basketProduct) => {
    total += basketProduct.price * basketProduct.quantity
    return total 
  }, 0)

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin} handleDeleteBasketProduct={handleDeleteBasketProduct} />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.cardBasket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
