import { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';
import { theme } from '../../../../theme/index.js';
import Product from './Product.jsx';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  console.log(menu);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Product
            key={produit.id}
            title={produit.title}
            imageSource={produit.imageSource}
            price={produit.price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

`;
