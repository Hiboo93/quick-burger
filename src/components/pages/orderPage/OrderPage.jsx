import { styled } from "styled-components";
import { theme } from "../../../theme/index.js";
import Navbar from "./navbar/Navbar.jsx";
import Main from "./main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
//import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
//import { deepClone } from "../../../utils/array.js";
import { useMenu } from "../../../hooks/useMenu.jsx";
import { useBasket } from "../../../hooks/useBasket.jsx";

function OrderPage() {
  // state
  const [isModeAdmin, setisModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  
  const {menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
  const { basket, handleAddToBasket } = useBasket()

  // comportements (gestionnaire de state ou "state handlers")

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
    setNewProduct: setNewProduct,
    productSelected: productSelected,
    setProductSelected: setProductSelected,
    handleEdit: handleEdit,
    basket: basket,
    handleAddToBasket: handleAddToBasket
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
