import {createContext} from "react";

export default createContext({
    username: "",
    isModeAdmin: false,
    setisModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    handleAdd: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
    resetMenu: () => {},

    newProduct: {},
    setNewProduct: () => {},

    ProductSelected: {},
    setProductSelected: () => {},
    handleProductSelected: () =>{},

    basket: [],
    handleAddToBasket: () => {},
    handleDeleteBasketProduct: () => {},
});