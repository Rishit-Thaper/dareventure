export const saveToLocal = (key: string, id: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, id);
  }
};

export const getDataFromLocal = (key: string) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    return JSON.parse(data!);
  }
};
