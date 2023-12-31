import styled from "styled-components";
import Header from "../../../../reusable-ui/Header.jsx";
import { theme } from "../../../../../theme/index.js";

export default function BasketFooter() {
  return (
    <Header>
        <BasketFooterStyled>
            <span>Codé avec React.js</span> 
        </BasketFooterStyled>
    </Header>
  )
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;
