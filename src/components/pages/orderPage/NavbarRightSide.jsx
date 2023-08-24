import { styled } from 'styled-components';
//import { Link } from 'react-router-dom'
import Profile from './Profile.jsx';

function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className='right-side'>
      {/* <div className="admin-button">Admin Button</div> */}
        <Profile/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
        display: flex;
        align-items: center;
        padding-right: 50px;

        /* .admin-button {
          background: lightblue;
        } */

        .profile {
          background: yellow;
        }
`;

export default NavbarRightSide
