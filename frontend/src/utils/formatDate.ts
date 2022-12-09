export default function formatDate(date: number | Date) {
  const locale = "pt-BR";
  const format: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  if (typeof date === "number")
    return new Date(date).toLocaleDateString(locale, format);
}
