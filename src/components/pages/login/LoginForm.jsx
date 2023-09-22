import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"
import styled from "styled-components"
import TextInput from "../../reusable-ui/TextInput.jsx";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";
import { theme } from "../../../theme/index.js";
//import theme from "/src/theme/index.js"
//import LogoQuickBurger from "../../LogoQuickBurger.jsx";

function LoginForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <LoginFormStyled
      action="submit"
      onSubmit={handleSubmit}
      className="form-container"
    >
      <div>
        <h1>Bienvenue chez-nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput
          value={name}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <PrimaryButton
          label={"Accédez à mon espace"}
          name={name}
          Icon={<IoChevronForward />}
        />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
 text-align: center;
 max-width: 500px;
 min-width: 400px;
 margin: 0px auto;
 padding: 40px ${theme.spacing.lg};
 border-radius: ${theme.borderRadius.round};
 font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: ${theme.gridUnit * 5}px;
  }

 h1 {
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P5};
 }
 
 h2 {
  //color: #8e8b8b;
  margin: 20px 10px 10px;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P4};
 }

 .input-login {
  margin: 18px 0;
 }
`

export default LoginForm;
