export const formatToBRL = (value: number) => {
  return value.toFixed(2).toString().replace(".", ",");
};
