import { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext.jsx';

export default function AddForm() {

    const { handleAdd } = useContext(OrderContext)

    const newProduct = {
        id : new Date().getTime(),
        title : "Nouveau produit",
        imageSource : "https://omalo.fr/site/wp-content/uploads/2021/03/Tacos-Malo_O-malo-1-1-600x600.png",
        price : 2.5
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleAdd(newProduct)
    }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className="image-preview">ImagePreview</div>
        <div className="input-fields">
            <input type='text' placeholder='Nom du produit' />
            <input type='text' placeholder='Image URL' />
            <input type='text' placeholder='Prix' />
        </div>
        <button className="submit-button">Submit button</button>
    </AddFormStyled>
  )
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
