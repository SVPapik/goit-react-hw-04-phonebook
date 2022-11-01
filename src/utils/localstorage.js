const setToLocalStorage = (name, value) =>
  localStorage.setItem(name, JSON.stringify(value));
const getFromLocalStorage = name => JSON.parse(localStorage.getItem(name));
export { getFromLocalStorage, setToLocalStorage };
