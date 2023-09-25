import { useContext } from 'react'
import HintMessage from './HintMessage.jsx'
import OrderContext from '../../../../../../../context/OrderContext.jsx'
import styled from 'styled-components'
//import Button from '../../../../../../reusable-ui/Button.jsx'
import ImagePreview from './ImagePreview.jsx'
import TextInput from '../../../../../../reusable-ui/TextInput.jsx'
//import { getInputTextsConfig } from '../../../../../../../utils/inputTextConfig.js'

export default function EditForm() {

  //const {productSelected} = useContext(OrderContext)

  //const inputTexts = inputTexts

  return (
    <EditFormStyled >
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            Icon={input.Icon}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.form`
  //border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); //grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    //background: blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      //width: 50%;
      height: 100%;
    }
  }
`;
