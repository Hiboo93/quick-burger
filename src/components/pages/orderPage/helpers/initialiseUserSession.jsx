import { getMenu } from "../../../../api/product.js";
import { getLocalStorage } from "../../../../utils/window.js";

const initialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const intialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  if (!basketReceived) setBasket(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await initialiseMenu(username, setMenu);
  intialiseBasket(username, setBasket);
};
