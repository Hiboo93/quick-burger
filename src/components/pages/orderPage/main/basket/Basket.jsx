import styled from "styled-components";
//import { theme } from "../../../../../theme/index.js";
//import Header from "../../../../reusable-ui/Header.jsx";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/maths.js";
import Footer from "./Footer.jsx";
//import BasketBody from "./BasketBody.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import EmptyBasket from "./EmptyBasket.jsx";


export default function Basket() {
  const { basket } = useContext(OrderContext)

  return (
    <BasketStylde>
      <Total amountToPay={formatPrice(0)} />
      <EmptyBasket basket={basket} />
      <Footer/>
    </BasketStylde>
  );
}

const BasketStylde = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`;
