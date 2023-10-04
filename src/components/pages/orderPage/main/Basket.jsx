import styled from 'styled-components'
import { theme } from '../../../../theme/index.js'

export default function Basket() {
  return (
     <BasketStylde>
      <div className='head'>Head</div>
      <div className='body'>Body</div>
      <div className='footer'>Footer</div>
     </BasketStylde> 
  )
}

const BasketStylde = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  

  .head {
    height: 70px;
    background: ${theme.colors.background_dark};
  }

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }

  .footer {
    height: 70px;
    background: ${theme.colors.background_dark};
    
  }
`
