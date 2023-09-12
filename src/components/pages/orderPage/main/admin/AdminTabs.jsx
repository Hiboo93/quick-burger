import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
//import { AiOutlinePlus } from "react-icons/ai";
//import { MdModeEditOutline } from "react-icons/md"
import { theme } from "../../../../../theme/index.js";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { getTabsConfig } from "./getTabsConfig.jsx";


export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //ouvre le panel dans tous les cas
    setCurrentTabSelected(tabSelected); //reactualise l'onglet selectionné
  };

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            //onClick={tab.onClick}
            onClick={() => selectTab(tab.index)}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  //border: 1px solid red;
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
