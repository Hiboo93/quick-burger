import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"
import styled from "styled-components"
import TextInput from "../../reusable-ui/TextInput.jsx";
import Button from "../../reusable-ui/Button.jsx"
import { theme } from "../../../theme/index.js";
import { authenticateUser } from "../../../api/user.js";
import Welcome from "./Welcome.jsx";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    authenticateUser(userName)
    setUserName("");
    navigate(`/order/${userName}`);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome/>
      <div>
        <TextInput
          value={userName}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button
          label={"Accédez à mon espace"}
          Icon={<IoChevronForward />}
        />
      </div>
    </LoginFormStyled>
  );
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
    border: 1.5px solid ${theme.colors.loginLine};
    //border: 1.5px solid #f56a2c;
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
