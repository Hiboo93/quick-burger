import { css, keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
    0% {
        position: absolute;
        z-index: 1;
        opacity: 0;
        transform: translateX(100%);
    }
   
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const adminAnimation = css`
.admin-appear {
  opacity: 0.1;
  transform: translateY(100%);
  &.admin-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms;
  }
  .admin-enter-done {}
}
`

export const basketAnimation = css`
  .animation-basket-appear {
    .card {
      background: orange;
      transition: 5s;
      transform: translateX(350px);
    }
  }

  .animation-basket-enter {
    .card {
      background: orange;
      transition: 5s;
      transform: translateX(350px);
    }
  }

  .animation-basket-enter-active {
    .card {
      transition: 1s;
      transform: translateX(0px);
    }
  }
  .animation-basket-enter-done {
    .card {
      transition: 1s;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0px);
    }
  }
  .animation-basket-exit-active {
    .card {
      background: red;
      transition: 1s;
      transform: translateX(350px);
    }
  }
  .animation-basket-exit-done {
    .card {
      background: lightblue;
    }
  }
`;

export const menuAnimation = css`
    .animation-menu-enter {
        opacity: 0.01;
        transform: translateX(-120px);
        &.animation-menu-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all 300ms ease-out;
        }
    }
    .animation-menu-enter-done {}

    .animation-menu-exit {
        opacity: 1;
        transform: translateY(0);
        &.animation-menu-exit-active {
            opacity: 0.01;
            transform: 300ms ease-out;
        }
    }
    .animation-menu-exit-done {}
`