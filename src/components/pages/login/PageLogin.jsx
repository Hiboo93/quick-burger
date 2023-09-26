import LogoQuickBurger from "../../reusable-ui/LogoQuickBurger.jsx";
import LoginForm from "./LoginForm.jsx";
import styled from "styled-components"
//import imgBurger from "/src/assets/F03 burger-background.jpg"

function PageLogin() {
  return (
    <PageLoginStyled >
      <LogoQuickBurger className={"logo-login-page"}/>
      <LoginForm/>
    </PageLoginStyled>
  );
}

//stylisation avec le package styled-components
const PageLoginStyled = styled.div`
  //background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ::before {
    content: "";
    background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .logo-login-page {
    //transform: scale(2.5);
  }
`

export default PageLogin;
