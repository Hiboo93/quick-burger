import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import Header from "../../../../../reusable-ui/Header.jsx";
import { formatPrice } from "../../../../../../utils/maths.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { calculateSumToPay } from "./helper.jsx";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect.jsx";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);
  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <BasketHeaderStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
      </BasketHeaderStyled>
    </Header>
  );
}


const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
