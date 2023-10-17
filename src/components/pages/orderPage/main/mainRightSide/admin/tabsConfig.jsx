import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./adminPanel/AddForm.jsx";
import EditForm from "./adminPanel/EditForm.jsx";
import HintMessage from "./adminPanel/HintMessage.jsx";

export const tabsConfig = (hasAlreadyBeenClicked) => [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus/>,
      Content: <AddForm />
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline/>,
      Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    }
  ];

 export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}