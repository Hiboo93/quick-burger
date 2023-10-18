import { styled } from "styled-components";
import { theme } from "../../../theme/index.js";
import Navbar from "./navbar/Navbar.jsx";
import Main from "./main/Main.jsx";
import { useEffect, useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { useMenu } from "../../../hooks/useMenu.jsx";
import { useBasket } from "../../../hooks/useBasket.jsx";
import { findObjectById } from "../../../utils/array.js";
//import { getUser } from "../../../api/user.js";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession.jsx";


function OrderPage() {
  // state
  const [isModeAdmin, setisModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams();

  const handleProductSelected = (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    setIsCollapsed(false);
    setCurrentTabSelected("edit");
    setProductSelected(productClickedOn);
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, []);

  const orderContextValue = {
    username: username,
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
    handleAddToBasket: handleAddToBasket,
    handleDeleteBasketProduct: handleDeleteBasketProduct,
    handleProductSelected: handleProductSelected,
  };

  // appel API pour récupérer l'utilisateur  "Alexi"
  //getUser("Jordan");

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
