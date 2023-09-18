import { styled } from "styled-components";
import Tab from "../../../../../reusable-ui/Tab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
//import { AiOutlinePlus } from "react-icons/ai";
//import { MdModeEditOutline } from "react-icons/md"
import { theme } from "../../../../../../theme/index.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { tabsConfig } from "./tabsConfig.jsx";


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

  const tabs = tabsConfig;

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
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
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
