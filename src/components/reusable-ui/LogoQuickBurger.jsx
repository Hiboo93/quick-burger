import styled from "styled-components"

import "./logoQuickBurger.css"

function LogoQuickBurger() {
  return (
    <LogoStyled>
      <h1>QUICK</h1>
      <img src="/assets/F03 logo-orange.png" alt="" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  //border: 1px solid blue;
  display: flex;
  align-items: center;
  //transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
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
