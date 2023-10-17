import React, { useContext } from "react";
import BasketProducts from "./BasketProducts.jsx";
import EmptyBasket from "./EmptyBasket.jsx";
import { isEmpty } from "../../../../../../utils/array.js";
import OrderContext from "../../../../../../context/OrderContext.jsx";

export default function BasketBody() {
  const { basket, menu } = useContext(OrderContext);
  return (
    <>
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={menu === undefined} />
      ) : (
        <BasketProducts />
      )}
    </>
  );
}
