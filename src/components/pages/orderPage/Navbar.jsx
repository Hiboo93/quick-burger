
import { styled } from "styled-components";
import NavbarRightSide from './NavbarRightSide.jsx';
import LogoQuickBurger from "../../reusable-ui/LogoQuickBurger.jsx";

function Navbar({username}) {
  return (
    <NavbarStyled>
        <LogoQuickBurger/>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      //align-items: center;

`;

export default Navbar