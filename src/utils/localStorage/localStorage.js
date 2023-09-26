export const getLocalStorage = (name) => {
  const stringData = localStorage.getItem(name);
  const data = JSON.parse(stringData);
  console.log(data);
  return data ? data : [];
};
export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
