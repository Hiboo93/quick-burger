import { useContext } from "react";
import { styled } from "styled-components";
//import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import { theme } from "../../../../../../theme/index.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";


const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  //const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);

  if (menu.length === 0) {
    if(!isModeAdmin) return <EmptyMenuClient/>
    return <EmptyMenuAdmin onReset={resetMenu} />
  } 

  const handleClick = (idProductClicked) => {
    const productSelected = menu.find((product) => product.id === idProductClicked)
    setProductSelected(productSelected)
  }
  

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Card
            key={produit.id}
            title={produit.title}
            imageSource={
              produit.imageSource ? produit.imageSource : IMAGE_BY_DEFAULT
            }
            leftDescription={formatPrice(produit.price)}
            hasDeletButton={isModeAdmin}
            onDelete={() => handleDelete(produit.id)}
            onClick={() => handleClick(produit.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;
`;
