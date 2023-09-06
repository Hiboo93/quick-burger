import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
//import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme/index.js";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<FiChevronDown/>}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
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
