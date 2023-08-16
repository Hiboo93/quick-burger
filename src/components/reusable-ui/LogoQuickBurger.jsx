import styled from "styled-components"

import "./logoQuickBurger.css"

function LogoQuickBurger() {
  return (
    <LogoStyled>
      <h3>QUICK BURGER</h3>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  background: blue;
`;

export default LogoQuickBurger
