import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-group"
    >
      <CSSTransition classNames="count-animated" timeout={300} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
    /* border: 2px solid white;
    padding: 5px 10px; */
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }

    .count-animated-enter {
        
        transform: translateY(100%);
    }
    .count-animated-enter-active {
        
        transform: translateY(0%);
        transition: 300ms;
    }
    .count-animated-enter-done {
        
    }

    .count-animated-exit {
        
        transform: translateY(0%);
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .count-animated-exit-active {
        background: green;
        transform: translateY(-100%);
        transition: 300ms;
    }

    .count-animated-exit-done {}
`
