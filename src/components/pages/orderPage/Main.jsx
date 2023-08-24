import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme/index.js';

function Main() {
  return (
    <MainStyled className="main"></MainStyled>
  )
}

const MainStyled = styled.div`
      background: ${theme.colors.background_white};
      flex: 1;
      //height: calc(95vh - 10vh);
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2)inset;
`;

export default Main