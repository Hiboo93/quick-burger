import { useContext } from 'react'
import HintMessage from './HintMessage.jsx'
import OrderContext from '../../../../../../../context/OrderContext.jsx'

export default function EditForm() {

  const {productSelected} = useContext(OrderContext)

  return (
    <div>
      <HintMessage/>
      <span>{productSelected && productSelected.title}</span>
    </div>
  )
}
