import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.jsx";
import Admin from "./admin/Admin.jsx";
import OrderContext from "../../../../context/OrderContext.jsx";


function Main() {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin ? <Admin/> : null}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  //border: 3px solid green;
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  //flex: 1;
  //height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;
  //grid-template-columns: 25% 1fr;

  //overflow-y: scroll;
  /* .basket {
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;

export default Main;
