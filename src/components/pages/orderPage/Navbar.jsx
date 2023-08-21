import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from "styled-components";

function Navbar({ username }) {
  return (
    <NavbarStyled>
    <div className="left-side">Left</div>
    <div className='right-side'>
    Right
        <h1>Bonjour {username} </h1>
        <Link to="/login">
            <button>Déconnexion</button>
        </Link>
    </div>
        
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      //align-items: center;

      .left-side {
        background: pink;
      }

      .right-side {
        background: purple;
      }
    
`;

export default Navbar