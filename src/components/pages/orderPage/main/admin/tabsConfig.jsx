import AddForm from "./adminPanel/AddForm.jsx";
import EditForm from "./adminPanel/EditForm.jsx";


export const tabsConfig = [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: "",
      Content: <AddForm />
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: "",
      Content: <EditForm />
    },
  ];

 export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)