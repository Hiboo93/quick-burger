import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme/index.js';

export default function AdminPanel() {
  return (
    <AdminPanelStyled></AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  //border: 1px solid blue;
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.sublte};
`;