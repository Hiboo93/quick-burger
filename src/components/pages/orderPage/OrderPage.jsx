import { styled } from "styled-components";
import { theme } from "../../../theme/index.js";
import Navbar from "./navbar/Navbar.jsx";
import Main from "./main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { useParams } from "react-router-dom";

function OrderPage() {
  const { username } = useParams()
  const [isModeAdmin, setisModeAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  
  const orderContextValue = {
    isModeAdmin: isModeAdmin,
    setisModeAdmin: setisModeAdmin,
    isCollapsed: isCollapsed,
    setIsCollapsed: setIsCollapsed,
    isAddSelected: isAddSelected,
    setIsAddSelected: setIsAddSelected,
    isEditSelected: isEditSelected,
    setIsEditSelected: setIsEditSelected,
    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: setCurrentTabSelected
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username}/>
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
