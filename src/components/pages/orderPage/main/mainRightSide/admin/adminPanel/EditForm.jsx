import { useContext } from 'react'
import OrderContext from '../../../../../../../context/OrderContext.jsx'
import styled from 'styled-components'
import ImagePreview from './ImagePreview.jsx'
import TextInput from '../../../../../../reusable-ui/TextInput.jsx'
import { getInputTextsConfig } from './inputTextConfig.jsx'
import { theme } from '../../../../../../../theme/index.js'


export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);

  // comportement (gestionnaire d'évenement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    // state handler du menu
    handleEdit(productBeingUpdated); // cette ligne update le menu
  };
  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
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
      <div className="submit">
        <span className='sentence'>
          Cliquer sur un produit du menu pour le modifier
          <span className='live-update'> en temps réel</span>
        </span>
      </div>
    </EditFormStyled>
  );
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      .live-update {
        text-decoration: underline;
      }
    }
  }
`;
