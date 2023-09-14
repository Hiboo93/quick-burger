import {createContext} from "react";

export default createContext({
    isModeAdmin: false,
    setisModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    handleAdd: () => {},

    // isAddSelected: false,
    // setIsAddSelected: () => {},

    // isEditSelected: false,
    // setIsEditSelected: () => {},
});