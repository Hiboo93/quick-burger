import styled from 'styled-components'

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
    background: red;
  }
  .body {
    background: blue
  }
  .footer {
    background: green
  }
`
