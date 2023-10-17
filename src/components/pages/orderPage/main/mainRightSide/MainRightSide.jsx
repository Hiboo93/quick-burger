import { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme/index.js'
import Menu from './menu/Menu.jsx'
import OrderContext from '../../../../../context/OrderContext.jsx'
import Admin from './admin/Admin.jsx'
import { TransitionGroup, CSSTransition} from "react-transition-group"
import { adminAnimation } from '../../../../../theme/animations.js'

export default function MainRightSide() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear={true} classNames="admin" timeout={500}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
      )}
    </MainRightSideStyled>
  );
}



const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`;
