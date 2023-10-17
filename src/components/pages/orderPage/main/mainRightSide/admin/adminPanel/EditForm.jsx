import { useContext, useState } from 'react'
import OrderContext from '../../../../../../../context/OrderContext.jsx'
import EditInfoMessage from "./EditInfoMessage"
import SavingMessage from './SavingMessage.jsx';
import { useDisplaySuccessMessage } from '../../../../../../../hooks/useDisplaySuccessMessage.jsx';
import Form from './Form.jsx';


export default function EditForm() {
  const { username, productSelected, setProductSelected, handleEdit } =
    useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useDisplaySuccessMessage()

  // comportement (gestionnaire d'évenement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    // state handler du menu
    handleEdit(productBeingUpdated, username); // cette ligne update le menu
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
