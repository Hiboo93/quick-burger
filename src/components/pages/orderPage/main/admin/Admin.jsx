import React from 'react'
import { styled } from 'styled-components'
//import { theme } from '../../../../../theme/index.js';
import AdminTabs from './AdminTabs.jsx';
import AdminPanel from './AdminPanel.jsx';

export default function Admin() {
  return (
    <AdminStyled>
        <AdminTabs/>
        <AdminPanel/>
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


