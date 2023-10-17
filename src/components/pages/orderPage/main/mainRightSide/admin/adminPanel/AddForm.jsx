import { useContext } from 'react'
import OrderContext from '../../../../../../../context/OrderContext.jsx';
import { EMPTY_PRODUCT } from '../../../../../../../enums/product.jsx';
import { useDisplaySuccessMessage } from '../../../../../../../hooks/useDisplaySuccessMessage.jsx';
import { replaceFrenchCommaWithDot } from '../../../../../../../utils/maths.js';
import Form from './Form.jsx';
import SubmitButton from './SubmitButton.jsx';

export default function AddForm() {
  const { username, handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage} = useDisplaySuccessMessage()
  //const [isSubmited, setIsSubmited] = useState(false); useState intégré au custom hooks useDisplaySuccesMessage

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(), //id: new Date().getTime(),
      price: replaceFrenchCommaWithDot(newProduct.price)
    };
    
    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const {name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted}/>
    </Form>
  );
}
