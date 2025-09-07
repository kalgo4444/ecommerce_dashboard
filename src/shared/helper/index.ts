export const getLocal = (key: string): any | null => {
  const item = localStorage.getItem(key);
  return item;
};

export const setLocal = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const removeLocal = (key: string): void => {
  localStorage.removeItem(key);
};
