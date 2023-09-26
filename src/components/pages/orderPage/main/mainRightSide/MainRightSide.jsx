import { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme/index.js'
import Menu from './menu/Menu.jsx'
import OrderContext from '../../../../../context/OrderContext.jsx'
import Admin from './admin/Admin.jsx'

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainRightSideStyled>
        <Menu/>
        {isModeAdmin ? <Admin/> : null}
      </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
