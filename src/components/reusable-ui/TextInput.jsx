import styled, { css } from "styled-components"
import { theme } from "../../theme/index.js"


function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" onChange={onChange} value={value} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  //border: 1px solid yellow;
  //background-color: ${theme.colors.white};
  // ${(props) => props.version === "normal" && extraStyleNormal};
  // ${(props) => props.version === "minimalist" && extraStyleMinimalist};

  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  //padding: 18px 24px;

  .icon {
    //color: red;
    /* justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark}; */
    //margin: 0 8px 0 10px;
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
  }

  input {
    //background: blue;
    border: none;
    font-size: ${theme.fonts.size.SM};
    //color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      //background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;
const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;


export default TextInput