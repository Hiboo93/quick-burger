import { styled } from "styled-components";
import { theme } from "../../../theme/index.js";
import Navbar from "./navbar/Navbar.jsx";
import Main from "./main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";

//import { useParams } from "react-router-dom";

function OrderPage() {
  //const { username } = useParams()
  const [isModeAdmin, setisModeAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)


  const handleAdd = (newProduct) => {
     // 1. copie du tableau
     const menuCopy = JSON.parse(JSON.stringify(menu))

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]

    // 3. update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    // 1. copie du tableau
    const menuCopy = JSON.parse(JSON.stringify(menu))

    // 2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

    // 3. update du state
    setMenu(menuUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuCopy = JSON.parse(JSON.stringify(menu))
    
    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id)

    menuCopy[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    setMenu(menuCopy)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
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
    setNewProduct: setNewProduct,
    productSelected: productSelected,
    setProductSelected: setProductSelected,
    handleEdit:handleEdit,
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
