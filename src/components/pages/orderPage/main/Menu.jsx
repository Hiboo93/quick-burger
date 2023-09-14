import { useContext, useState } from "react";
import { styled } from "styled-components";
//import { fakeMenu } from "../../../../fakeData/fakeMenu.js";
import { theme } from "../../../../theme/index.js";
import { formatPrice } from "../../../../utils/maths.js";
import Card from "../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../context/OrderContext.jsx";

export default function Menu() {
  //const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const { menu } = useContext(OrderContext)

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Card
            key={produit.id}
            title={produit.title}
            imageSource={produit.imageSource}
            leftDescription={formatPrice(produit.price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
//border: 2px solid blue;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;
`;
