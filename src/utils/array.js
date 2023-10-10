export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}

export const find = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndex = (idWithUnknowIndex, array) => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknowIndex
  );
}

export const filtre = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}


