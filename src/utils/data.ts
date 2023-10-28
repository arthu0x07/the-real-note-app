const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function DateToMaskDate(data?: Date) {
  if (!data) return;

  const formatedDate = `${
    months[data?.getMonth()]
  } ${data?.getDate()}, ${data?.getFullYear()}`;

  return formatedDate;
}
