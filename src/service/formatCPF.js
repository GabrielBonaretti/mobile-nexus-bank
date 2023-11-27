export const formatCPF = (inputElement) => {
  const cleanedValue = inputElement
    .replace(".", "")
    .replace(".", "")
    .replace("-", "");

  // Format the CPF with dots and hyphen
  let formattedCPF = "";
  for (let i = 0; i < cleanedValue.length; i++) {
    if (i === 3) {
      formattedCPF += ".";
    } else if (i === 6) {
      formattedCPF += ".";
    } else if (i === 9) {
      formattedCPF += "-";
    }
    formattedCPF += cleanedValue.charAt(i);
  }

  return formattedCPF;
};
