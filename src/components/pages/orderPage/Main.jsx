import React from 'react'
import { styled } from 'styled-components';

function Main() {
  return (
    <MainStyled className="main">Main</MainStyled>
  )
}

const MainStyled = styled.div`
      background: green;
      flex: 1;
      //height: calc(95vh - 10vh);
`;

export default Main