import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme/index.js';

export default function Admin() {
  return (
    <AdminStyled>Admin</AdminStyled>
  )
}

const AdminStyled = styled.div`
    //background: red;
    height: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.sublte};
`;


