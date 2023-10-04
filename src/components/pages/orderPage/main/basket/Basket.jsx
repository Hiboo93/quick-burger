import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
//import Header from "../../../../reusable-ui/Header.jsx";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/maths.js";
import Footer from "./Footer.jsx";

export default function Basket() {
  return (
    <BasketStylde>
      <Total amountToPay={formatPrice(0)}/>
      <div className="body">Body</div>
      <Footer/>
    </BasketStylde>
  );
}

const BasketStylde = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;


  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
