import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../../theme/index.js";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import { tabsConfig, getTabSelected } from "../tabsConfig"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = tabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  //border: 1px solid blue;
  height: 240px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.sublte};
  box-sizing: border-box;
  padding: 30px 5%;

  /* border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound}; */
`;
