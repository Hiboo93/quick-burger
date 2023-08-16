import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginForm.css"


import styled from "styled-components"
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

  const handleInput = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <LoginFormStyled
        action="submit"
        onSubmit={handleSubmit}
        className="form-container"
      >
        <h1>Bienvenue chez-nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <input
          className="inputName"
          type="text"
          onChange={handleInput}
          value={name}
          placeholder="Entrez votre prénom..."
          required
        />
        <Link to={`/order/${name}`}>
          <button>Accéder à mon espace</button>{" "}
        </Link>
      </LoginFormStyled>
    </div>
  );
}

const LoginFormStyled = styled.form`
 background: green;
`

export default LoginForm;
