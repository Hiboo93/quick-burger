import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu.js";
import { deepClone } from "../utils/array.js";
import { syncBothMenus } from "../api/product.js";



export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu.LARGE);

    const handleAdd = (newProduct, username) => {
        // 1. copie du tableau
        const menuCopy = deepClone(menu)
   
       // 2. manip de la copie du tableau
       const menuUpdated = [newProduct, ...menuCopy]
   
       // 3. update du state
       setMenu(menuUpdated)
       syncBothMenus(username, menuUpdated)
     }
   
     const handleDelete = (idOfProductToDelete) => {
       // 1. copie du tableau
       const menuCopy = deepClone(menu)
   
       // 2. manip de la copie du state
       const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
   
       // 3. update du state
       setMenu(menuUpdated)
     }
   
     const handleEdit = (productBeingEdited) => {
       // 1. copie du state (deep clone)
       const menuCopy = deepClone(menu)
       
       // 2. manip de la copie du state
       const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id)
   
       menuCopy[indexOfProductToEdit] = productBeingEdited
   
       // 3. update du state
       setMenu(menuCopy)
     }
   
     const resetMenu = () => {
       setMenu(fakeMenu.MEDIUM)
     }

     return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}
