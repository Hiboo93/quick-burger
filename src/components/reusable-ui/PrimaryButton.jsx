import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../theme/index.js";

function PrimaryButton({ Icon, name, label, className, version = "normal" }) {
  return (
    <div>
      <Link to={`/order/${name}`}>
        <PrimaryButtonStyled className={className} version={version}>
          <span>{label}</span>
          <div className="icon">{Icon && Icon}</div>
        </PrimaryButtonStyled>
      </Link>
    </div>
  );
}

const PrimaryButtonStyled = styled.button`
  ${(props) => props.version === "normal" && extraStylePrimary};
  ${(props) => props.version === "success" && extraStyleSuccess};

  ${(props) => extraStyle[props.version]}
`;
const extraStylePrimary = css`
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

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-left: 10px;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
};

export default PrimaryButton;
