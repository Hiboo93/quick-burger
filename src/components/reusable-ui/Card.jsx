import { styled } from "styled-components";
import { theme } from "../../theme/index.js";
import PrimaryButton from "./PrimaryButton.jsx";
import { TiDelete } from "react-icons/ti"

export default function Card({ title, imageSource, leftDescription, hasDeletButton, onDelete, onClick }) {
  return (
    <CardStyled className="produit" onClick={onClick}>
      {hasDeletButton && (
        <button className="delete-button" aria-label="delete-button" onClick={onDelete}> 
        <TiDelete className="icon"/>
      </button>
      )}

      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  box-sizing: border-box;
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-button {
    border: 1px solid;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;

    .icon {
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }

    :active {
      color: ${theme.colors.primary};
    }
  }

  .image {
    //border: 1px solid yellow;
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    //border: 1px solid fuchsia;
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      font-size: ${theme.fonts.size.P4};
      margin: auto 0;
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      //border: 1px solid yellow;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        //border: 1px solid blue;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;
