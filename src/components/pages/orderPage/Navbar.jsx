
import { styled } from "styled-components";
import NavbarRightSide from './NavbarRightSide.jsx';
import LogoQuickBurger from "../../reusable-ui/LogoQuickBurger.jsx";
import { theme } from "../../../theme/index.js";
import { refreshPage } from "../../../utils/window.js";

function Navbar({username}) {
  return (
    <NavbarStyled>
        <LogoQuickBurger className="logo-order-page" onClick={() => refreshPage()}/>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: ${theme.colors.white};
      height: 10vh;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      border-top-left-radius: ${theme.borderRadius.extraRound};
      border-top-right-radius: ${theme.borderRadius.extraRound};
      //align-items: center;

      .logo-order-page {
        cursor: pointer;
      }

`;

export default Navbar