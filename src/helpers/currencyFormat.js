let usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const currencyFormat = (number) => {
  return usd.format(number);
};
