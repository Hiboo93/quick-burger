import { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../../context/OrderContext.jsx';
import { FaHamburger } from 'react-icons/fa';
//import { BsFillCameraFill } from 'react-icons/bs';
//import { MdOutlineEuro } from 'react-icons/md';
import TextInput from '../../../../../../reusable-ui/TextInput.jsx';
import Button from '../../../../../../reusable-ui/Button.jsx';
import ImagePreview from './ImagePreview.jsx';
import SubmitMessage from './SubmitMessage.jsx';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
//import PrimaryButton from '../../../../../../reusable-ui/PrimaryButton.jsx';


export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  //const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(), //id: new Date().getTime(),
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

  const displaySuccessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 3000);
  };

  const inputTexts = [
    {
      id: "0",
      name: "title",
      value: newProduct.title,
      type: "text",
      placeholder: "Nom du produit",
      Icon: <FaHamburger />,
      version: "minimalist",
    },
    {
      id: "1",
      name: "imageSource",
      value: newProduct.imageSource,
      type: "text",
      placeholder: "Lien URL d'une Image",
      Icon: <BsFillCameraFill />,
      version: "minimalist",
    },
    {
      id: "2",
      name: "price",
      value: newProduct.price ? newProduct.price : "",
      type: "text",
      placeholder: "prix",
      Icon: <MdOutlineEuro />,
      version: "minimalist",
    },
  ];

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
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
      width: 50%;
    }
  }
`;
