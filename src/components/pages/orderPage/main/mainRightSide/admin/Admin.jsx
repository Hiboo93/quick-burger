import { styled } from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./adminPanel/AdminPanel.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  //background: red;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
`;
