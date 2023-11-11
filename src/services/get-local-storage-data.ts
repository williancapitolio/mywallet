export function getLocalStorageData<T> (key: string, empaty: T):T{
  const localStorageData = localStorage.getItem(key);
  if (!localStorageData) return empaty;
  return JSON.parse(localStorageData);
}
