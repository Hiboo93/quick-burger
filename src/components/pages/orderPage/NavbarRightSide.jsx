import { styled } from 'styled-components';
import { Link } from 'react-router-dom'

function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className='right-side'>
    Right
        <h1>Bonjour {username} </h1>
        <Link to="/login">
            <button>Déconnexion</button>
        </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
        background: purple;
`;

export default NavbarRightSide
