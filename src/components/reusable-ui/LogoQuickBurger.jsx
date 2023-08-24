import styled from "styled-components"
import { theme } from "../../theme/index.js";

function LogoQuickBurger({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>QUICK</h1>
      <img src="/images/logo-orange.png" alt="" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  //border: 1px solid blue;
  display: flex;
  align-items: center;
  //transform: scale(5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;

export default LogoQuickBurger
