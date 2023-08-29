import { styled } from 'styled-components';
import Profile from './Profile.jsx';

import ToggleButton from '../../../reusable-ui/ToggleButton.jsx';


function NavbarRightSide({ username }) {
  const isChecked = () => {

  }

  const onToggle = () => {

  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton 
      labelIfUnchecked='ACTIVER LE MODE ADMIN' 
      labelIfChecked='DÉSACTIVER LE MODE ADMIN'
      isChecked={isChecked}
      onToggle={onToggle}
      className="toggle-button"
      />
        <Profile username={username} />
        <ToastContainer />
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

        .toogle-button {
          border: 1px solid;
          
        }
`;

export default NavbarRightSide
