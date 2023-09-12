

export const getTabsConfig = (currentTabSelected) => [
    // {
    //   index: "chevronUpDown",
    //   label: "",
    //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //   onClick: () => setIsCollapsed(!isCollapsed),
    //   className: isCollapsed ? "is-active" : ""
    // },
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: "",
      //onClick: () => selectTab("add"),
      className: currentTabSelected === "add" ? "is-active" : "",
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: "",
      //onClick: () => selectTab("edit"),
      className: currentTabSelected === "edit" ? "is-active" : "",
    },
  ];