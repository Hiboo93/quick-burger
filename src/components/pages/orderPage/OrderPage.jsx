import { styled } from "styled-components";
import { theme } from "../../../theme/index.js";
import Navbar from "./navbar/Navbar.jsx";
import Main from "./main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "./main/mainRightSide/admin/adminPanel/AddForm.jsx";
//import { useParams } from "react-router-dom";

function OrderPage() {
  //const { username } = useParams()
  const [isModeAdmin, setisModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)


  const handleAdd = (newProduct) => {
    const menuCopy = [...menu]
    const menuUpdated = [newProduct, ...menuCopy]
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu]

    const menuUpdated = menuCopy.filter((product) => product.id != idOfProductToDelete)

    setMenu(menuUpdated)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL)
  }
  
  const orderContextValue = {
    isModeAdmin: isModeAdmin,
    setisModeAdmin: setisModeAdmin,
    isCollapsed: isCollapsed,
    setIsCollapsed: setIsCollapsed,
    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: setCurrentTabSelected,
    menu: menu,
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    resetMenu: resetMenu,
    newProduct: newProduct, 
    setNewProduct: setNewProduct

    // isAddSelected: isAddSelected,
    // setIsAddSelected: setIsAddSelected,
    // isEditSelected: isEditSelected,
    // setIsEditSelected: setIsEditSelected,
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
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
