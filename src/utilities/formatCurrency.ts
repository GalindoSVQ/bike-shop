const CURRENCY_FORMATTER = new Intl.NumberFormat("es-ES", {
  currency: "EUR",
  style: "currency",
});

export const removePoints = (value: string) => value.replace(/\./g, "");
export const replaceCommas = (value: string) => value.replace(/,/g, ".");

export function formatCurrency(value: string) {
  let price = removePoints(value);
  price = replaceCommas(price);

  return CURRENCY_FORMATTER.format(+price);
}
