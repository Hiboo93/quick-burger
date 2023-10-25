import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT, IMAGE_NO_STOCK } from "../../../../../../enums/product.jsx";
import { isEmpty } from "../../../../../../utils/array.js";
import Loader from "./Loader.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { menuAnimation } from "../../../../../../theme/animations.js";

export default function Menu() {
  //const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  // comportements (gestionnaire d'évenement ou "event handlers")
  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButoon = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  if (menu === undefined) return <Loader/>
  
  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <CSSTransition classNames="animation-menu" key={id} timeout={300}>
            <Card
              title={title}
              imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
              leftDescription={formatPrice(price)}
              hasDeletButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={isModeAdmin ? () => handleProductSelected(id) : null}
              $isHoverable={isModeAdmin}
              $isSelected={checkIfProductIsClicked(id, productSelected.id)}
              onAdd={(event) => handleAddButoon(event, id)}
              overlapImageSource={IMAGE_NO_STOCK}
              isOverlapImageVisible={true}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
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

  ${menuAnimation}
`;
