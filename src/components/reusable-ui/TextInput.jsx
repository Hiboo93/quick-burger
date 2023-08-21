import styled from "styled-components"
import { theme } from "../../theme/index.js"

function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        type="text"
        onChange={onChange}
        value={value}
        {...extraProps}
      />
    </InputStyled>
  )
}

const InputStyled =  styled.div`
  //border: 1px solid yellow;
  background-color: #fff;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    //color: red;
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    //width: 100%;
  }

  input {
    //background: blue;
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyMedium};
    }
  }
 `

export default TextInput