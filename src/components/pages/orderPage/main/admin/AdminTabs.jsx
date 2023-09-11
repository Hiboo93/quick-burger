import { styled } from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
//import { AiOutlinePlus } from "react-icons/ai";
//import { MdModeEditOutline } from "react-icons/md"
import { theme } from "../../../../../theme/index.js";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";


export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  // const selectAddTab = () => {
  //   setIsCollapsed(false);
  //   setIsAddSelected(true);
  //   setIsEditSelected(false);
  // };
  // const selectEditTab = () => {
  //   setIsCollapsed(false);
  //   setIsEditSelected(true);
  //   setIsAddSelected(false);
  // };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)

    if (tabSelected === "add") {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true)
      setIsAddSelected(false)
    }
  }

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
        //Icon={<AiOutlinePlus/>}
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        //Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
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
