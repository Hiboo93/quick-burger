import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme/index.js';
import PrimaryButton from '../../../reusable-ui/PrimaryButton.jsx';
import { formatPrice } from '../../../../utils/maths.js';

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
            <div className="left-description">{formatPrice(price)}</div>
            <div className="right-description">
                <PrimaryButton className="primary-button" label={"Ajouter"}/>
            </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .image {
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    margin-top: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    border: 1px solid fuchsia;
    display: grid;

    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    font-family: "Amatic SC", cursive;

    .description {
      border: 1px solid yellow;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
    }

    .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
    }

      .price {
        border: 1px solid blue;
      }

      .add-button {
        border: 1px solid green;
      }
    }
  }
`;
