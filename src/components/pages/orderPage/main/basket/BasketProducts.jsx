import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product.jsx";
import { findObjectById } from "../../../../../utils/array.js";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../mainRightSide/menu/helper.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
            <CSSTransition appear={true} classNames={"abricot"} key={basketProduct.id} timeout={{entrer: 5000, exit: 5000}}>
              <div className="basket-card" >
                <BasketCard
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_BY_DEFAULT
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  isSelected={checkIfProductIsClicked(
                    basketProduct.id,
                    productSelected.id
                  )}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  className={"pomme"}
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

  .abricot-appear {
    .pomme {
      background: orange;
      transition: 5s;
      transform: translateX(350px);
    }
  }
  
  .abricot-enter {
    .pomme {
      background: orange;
      transition: 5s;
      transform: translateX(350px);
    }
  }

  .abricot-enter-active {
    .pomme {
      transition: 1s;
      transform: translateX(0px);
    }
  }
  .abricot-enter-done {
    .pomme {
      transition: 1s;
    }
  }

  .abricot-exit {
    .pomme {
      transform: translateX(0px);
    }
  }
  .abricot-exit-active {
    .pomme {
      background: red;
      transition: 1s;
      transform: translateX(350px);
    }
  }
  .abricot-exit-done {
    .pomme {
      background: lightblue;
    }
  }

  .basket-card {
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
`;
