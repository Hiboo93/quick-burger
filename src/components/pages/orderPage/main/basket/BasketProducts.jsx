import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product.jsx";

export default function BasketProducts({ basket, isModeAdmin }) {
  const handleOnDelete = (id) => {
    
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource? basketProduct.imageSource : IMAGE_BY_DEFAULT}
              onDelete={() => handleOnDelete(basketProduct.id)}
              isModeAdmin={isModeAdmin}
          />
        </div>
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

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
