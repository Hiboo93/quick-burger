import { css } from "styled-components";

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