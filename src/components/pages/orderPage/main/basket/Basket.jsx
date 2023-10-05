import styled from "styled-components";
//import { theme } from "../../../../../theme/index.js";
//import Header from "../../../../reusable-ui/Header.jsx";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/maths.js";
import Footer from "./Footer.jsx";
import BasketBody from "./BasketBody.jsx";


export default function Basket() {
  return (
    <BasketStylde>
      <Total amountToPay={formatPrice(0)}/>
      <BasketBody/>
      <Footer/>
    </BasketStylde>
  );
}

const BasketStylde = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`;
