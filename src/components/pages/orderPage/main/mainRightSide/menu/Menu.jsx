import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { IMAGE_BY_DEFAULT } from "../../../../../../enums/product.jsx";




export default function Menu() {
  //const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const { menu, isModeAdmin, handleDelete, resetMenu, productSelected, setProductSelected, setIsCollapsed, setCurrentTabSelected, } =
    useContext(OrderContext);

    // comportements (gestionnaire d'évenement ou "event handlers")
    const handleClick = (idProductClicked) => {
      if (!isModeAdmin) return

      setIsCollapsed(false)
      setCurrentTabSelected("edit")
      const productClickedOn = menu.find(
        (product) => product.id === idProductClicked
      );
      setProductSelected(productClickedOn);
    };

    // affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDelete(idProductToDelete)
  }
  

  return (
    <MenuStyled className="menu">
      {menu.map(({id, title, imageSource, price}) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={
              imageSource ? imageSource : IMAGE_BY_DEFAULT
            }
            leftDescription={formatPrice(price)}
            hasDeletButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
