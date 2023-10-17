import styled from "styled-components";
import Total from "./Total.jsx";
import BasketFooter from "./BasketFooter.jsx";
import { theme } from "../../../../../theme/index.js";
import BasketBody from "./basketBody/BasketBody.jsx";

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody/>
      <BasketFooter />
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



