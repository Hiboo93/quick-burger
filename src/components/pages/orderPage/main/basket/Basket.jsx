import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Header from "../../../../reusable-ui/Header.jsx";

export default function Basket() {
  return (
    <BasketStylde>
      <Header>Head</Header>
      <div className="body">Body</div>
      <Header>Footer</Header>
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
