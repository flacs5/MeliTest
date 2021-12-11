export const getDecimalPart = (value: number) => {
  const amount = Math.floor(value);
  // patch para redondear a dos decimales
  return Math.round((value - amount) * 100) / 100;
};
