// fonction qui vérifie le produit cliqué avec isSelected
export const checkIfProductIsClicked = (idProductInMenu, idProductClickedOn) => {
    return idProductInMenu === idProductClickedOn ? true : false
  }