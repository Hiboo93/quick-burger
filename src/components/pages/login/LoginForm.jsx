import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginForm.css"
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"

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
        
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
            <input
              className="inputName"
              type="text"
              onChange={handleInput}
              value={name}
              placeholder="Entrez votre prénom..."
              required
            />
        </div>
          <Link to={`/order/${name}`}>
            <button className="button-with-icon">
              <span>Accéder à mon espace</span>
              <IoChevronForward className="icon"/>
            </button>
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

 .input-with-icon {
  //border: 1px solid yellow;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    //color: red;
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
    //width: 100%;
  }

  input {
    //background: blue;
    border: none;
    font-size: 15px;
    color: #17161a;
  }

  &::placeholder {
    background: white;
    color: lightgrey;
  }
 }

 .button-with-icon {
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-out;
  }

  &:active {
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
 }

`

export default LoginForm;
