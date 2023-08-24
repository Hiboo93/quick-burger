import { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';
import { theme } from '../../../../theme/index.js';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2)
    console.log(menu);

  return (
    <MenuStyled >
        {
            menu.map(produit => {
                return <div key={produit.id} className='produit'>{produit.title} </div>
            })
        }
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    .produit {
        background: red;
        width: 240px;
        height: 330px;
    }
  
`;
