import {createContext} from "react";

export default createContext({
    isModeAdmin: false,
    setisModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    resetMenu: () => {},
    handleAdd: () => {},
    handleDelete: () => {},

    newProduct: {},
    setNewProduct: () => {},

    ProductSelected: {},
    setProductSelected: () => {},

    // isAddSelected: false,
    // setIsAddSelected: () => {},

    // isEditSelected: false,
    // setIsEditSelected: () => {},
});