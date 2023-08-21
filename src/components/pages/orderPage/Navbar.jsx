import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from "styled-components";

function Navbar({ username }) {
  return (
    <NavbarStyled>
        <h1>Bonjour {username} </h1>
        <Link to="/login">
            <button>Déconnexion</button>
        </Link>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  
      background: blue;
      height: 10vh;
    
`;

export default Navbar