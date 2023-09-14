import { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext.jsx';

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0
}

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
//   const [title, setTitle] = useState("");
//   const [imageSource, setImageSource] = useState("");
//   const [price, setPrice] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    //id: new Date().getTime(),
    
    const newProductToAdd = {
        ...newProduct,
        id: crypto.randomUUID()
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input
          name="title"
          onChange={handleChange}
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit"
        />
        <input
          name="imageSource"
          onChange={handleChange}
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
        />
        <input
          name="price"
          onChange={handleChange}
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  //grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`;
