import { styled } from 'styled-components';
import Profile from './Profile.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { FaUserSecret } from 'react-icons/fa'
import ToggleButton from '../../../reusable-ui/ToggleButton.jsx';
import { theme } from '../../../../theme/index.js';
import OrderContext from '../../../../context/OrderContext.jsx';


function NavbarRightSide() {
  const { isModeAdmin, setisModeAdmin} = useContext(OrderContext)

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setisModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton 
      labelIfUnchecked='ACTIVER LE MODE ADMIN' 
      labelIfChecked='DÉSACTIVER LE MODE ADMIN'
      isChecked={isModeAdmin}
      onToggle={displayToastNotification}
      className="toggle-button"
      />
        <Profile />
        <ToastContainer className="toaster" bodyClassName="body-toast"/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

  /* .toogle-button {
    border: 1px solid;
  } */
`;

export default NavbarRightSide
