
const CURRENCY_FORMATTER = new Intl.NumberFormat("de-EU", {
  style: "currency",
  currency: "EUR"
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}