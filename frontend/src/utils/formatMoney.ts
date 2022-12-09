export default function formatMoney(money: number) {
  const locale = "pt-BR";
  return money.toLocaleString(locale, { currency: "BRL", style: "currency" });
}
