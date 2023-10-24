import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import { IMAGE_BY_DEFAULT } from "../../../../../../enums/product.jsx";
import { findObjectById } from "../../../../../../utils/array.js";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../../mainRightSide/menu/helper.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations.js";

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
    :first-child {
      //margin-top: 20px;
    }
    :last-child {
      //margin-bottom: 20px;
    }
  }

  ${basketAnimation}
`;
