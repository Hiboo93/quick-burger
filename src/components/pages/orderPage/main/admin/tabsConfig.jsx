import AddForm from "./adminPanel/AddForm.jsx";
import EditForm from "./adminPanel/EditForm.jsx";
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const tabsConfig = [
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
      Content: <EditForm />
    },
  ];

 export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)