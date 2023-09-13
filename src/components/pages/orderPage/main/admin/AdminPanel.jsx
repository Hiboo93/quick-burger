import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme/index.js';
import OrderContext from '../../../../../context/OrderContext.jsx';
import { getTabsConfig } from './getTabsConfig.jsx';

export default function AdminPanel() {
  const {
    currentTabSelected
  } = useContext(OrderContext)

  //const tabs = getTabsConfig(currentTabSelected)
  //const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"}
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