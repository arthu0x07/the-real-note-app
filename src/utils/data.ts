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
    months[new Date(data)?.getMonth()]
  } ${new Date(data)?.getDate()}, ${new Date(data)?.getFullYear()}`;

  return formatedDate;
}
