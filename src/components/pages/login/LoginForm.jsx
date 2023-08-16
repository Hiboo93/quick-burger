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
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
 background: green;
 text-align: center;
 max-width: 500px;
 min-width: 400px;
 margin: 0px auto;
 padding: 2.5rem 2rem;
 border-radius: 5px;
 font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

 h1 {
  color: white;
  font-size: 48px;
 }
 
 h2 {
  color: #8e8b8b;
  margin: 20px 10px 10px;
  color: white;
  font-size: 36px;
 }
`

export default LoginForm;
