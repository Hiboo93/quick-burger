import { useState} from 'react'
import { styled } from 'styled-components'
//import { theme } from '../../../../../theme/index.js';
import AdminTabs from './AdminTabs.jsx';
import AdminPanel from './AdminPanel.jsx';

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <AdminStyled>
        <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        {!isCollapsed && <AdminPanel/>}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    //background: red;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;


