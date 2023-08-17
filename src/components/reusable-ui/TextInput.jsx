import styled from "styled-components"

function TextInput({ value, onChange, Icon, ...extraProps }) {

  return (
    <InputStyled>
      {Icon && Icon}
      <input
        className="inputName"
        type="text"
        onChange={onChange}
        value={value}
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled =  styled.div`

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
    //width: 100%;
    //display: flex;
  }

  &::placeholder {
    background: white;
    color: lightgrey;
  }
 `

export default TextInput