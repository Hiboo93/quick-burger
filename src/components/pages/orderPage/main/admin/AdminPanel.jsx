import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme/index.js';
import OrderContext from '../../../../../context/OrderContext.jsx';

export default function AdminPanel() {

  const {
    isAddSelected,
    isEditSelected
  } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  //border: 1px solid blue;
    height: 251px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    //border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.sublte};
`;