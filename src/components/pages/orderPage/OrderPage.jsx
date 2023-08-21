import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {username} </h1>
        <Link to="/login">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
  }
`;

export default OrderPage;
