import { styled } from "styled-components";
import NavbarRightSide from "./NavbarRightSide.jsx";
import LogoQuickBurger from "../../../reusable-ui/LogoQuickBurger.jsx";
import { refreshPage } from "../../../../utils/window.js";
import { theme } from "../../../../theme/index.js";

function Navbar() {
  return (
    <NavbarStyled>
      <LogoQuickBurger
        className="logo-order-page"
        onClick={() => refreshPage()}
      />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
  //align-items: center;

  .logo-order-page {
    cursor: pointer;
  }
`;

export default Navbar;
