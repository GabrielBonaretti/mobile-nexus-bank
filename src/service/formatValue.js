export const formatValue = (inputElement) => {
  const cleanedValue = inputElement.toString().replace(".", "");
  const formattedValue = (cleanedValue / 100).toFixed(2);
  return formattedValue;
};
