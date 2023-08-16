import LogoQuickBurger from "../../reusable-ui/LogoQuickBurger.jsx";
import LoginForm from "./LoginForm.jsx";
import "./pageLogin.css"
import styled from "styled-components"
//import imgBurger from "/src/assets/F03 burger-background.jpg"

function PageLogin() {

  return (
    <PageLoginStyled >
      <LogoQuickBurger/>
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
    background: url("/assets/F03 burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default PageLogin;
