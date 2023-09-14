import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import OrderContext from "../../../../../../context/OrderContext.jsx";
//import { tabsConfig, getTabSelected } from './tabsConfig.jsx';
//import { tabsConfig, getTabSelected } from "./tabsConfig.jsx";
import { tabsConfig, getTabSelected } from "../tabsConfig"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  //border: 1px solid blue;
  height: 250px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.sublte};
  padding: 30px 5%;

  /* border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound}; */

`;
