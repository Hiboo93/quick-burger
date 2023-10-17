import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-group"
    >
      <CSSTransition classNames="count-animated" timeout={5000} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
    border: 1px solid red;

    .count-animated-enter{
        background: green;
    }
    .count-animated-enter-active{
        background: blue;
        transition: 2s;
    }
    .count-animated-enter-done{
        background: pink;
    }

    .count-animated-exit{
        background: yellow;
    }
    .count-animated-exit-active{
        background: red;
        transition: 2s;
    }

    .count-animated-exit-done{}
`
