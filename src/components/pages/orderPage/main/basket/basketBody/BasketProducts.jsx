import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import { BASKET_MESSAGE, IMAGE_BY_DEFAULT } from "../../../../../../enums/product.jsx";
import { findObjectById } from "../../../../../../utils/array.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../../mainRightSide/menu/helper.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import { convertStringToBoolean } from "../../../../../../utils/string.js";
import Sticker from "../../../../../reusable-ui/Sticker.jsx";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);
          return (
            <CSSTransition
              appear={true}
              classNames={"animation-basket"}
              key={basketProduct.id}
              timeout={{ entrer: 5000, exit: 5000 }}
            >
              <div className="card-container">
              {convertStringToBoolean(menuProduct.isPublicised) && <Sticker className="badge-new"/>}
                <BasketCard
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_BY_DEFAULT
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  $isClickable={isModeAdmin}
                  $isSelected={checkIfProductIsClicked(
                    basketProduct.id,
                    productSelected.id
                  )}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  className={"card"}
                  price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.NOT_AVAILABLE}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      //margin-top: 20px;
    }
    :last-child {
      //margin-bottom: 20px;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }

  ${basketAnimation}
`;
