import { getMenu } from "../../../../api/product.js";
import { getLocalStorage } from "../../../../utils/window.js";

const initialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasket(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
};
