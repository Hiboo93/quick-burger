import { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import { FiCheck } from 'react-icons/fi';

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);
  //   const [title, setTitle] = useState("");
  //   const [imageSource, setImageSource] = useState("");
  //   const [price, setPrice] = useState(0);

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
    }, 2000);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune Image</div>
        )}
      </div>
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
      <div className="submit">
        <button className="submit-button">Submit button</button>
        {isSubmited && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès</span>
          </div>
        )}
      </div>
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
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }

    .submit-message {
      border: 1px solid red;
    }
  }
`;
