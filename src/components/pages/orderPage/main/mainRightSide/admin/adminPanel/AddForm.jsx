import { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../../context/OrderContext.jsx';
import TextInput from '../../../../../../reusable-ui/TextInput.jsx';
import Button from '../../../../../../reusable-ui/Button.jsx';
import ImagePreview from './ImagePreview.jsx';
import SubmitMessage from './SubmitMessage.jsx';
import { EMPTY_PRODUCT } from '../../../../../../../enums/product.jsx';
import { getInputTextsConfig } from './inputTextConfig.jsx';
import { useDisplaySuccessMessage } from '../../../../../../../hooks/useDisplaySuccessMessage.jsx';
import { replaceFrenchCommaWithDot } from '../../../../../../../utils/maths.js';

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmited, displaySuccessMessage} = useDisplaySuccessMessage()
  //const [isSubmited, setIsSubmited] = useState(false); useState intégré au custom hooks useDisplaySuccesMessage

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(), //id: new Date().getTime(),
      price: replaceFrenchCommaWithDot(newProduct.price)
    };
    
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  //fonction displaySuccesMessage intégré au custom hooks useDisplaySuccessMessage
  // const displaySuccessMessage = () => {
  //   setIsSubmited(true);
  //   setTimeout(() => {
  //     setIsSubmited(false);
  //   }, 3000);
  // };

  const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
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
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter Un nouveau produit au menu"}
          version="success"
        />
        {isSubmited && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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
