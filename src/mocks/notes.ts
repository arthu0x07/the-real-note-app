export const mockNotes: INotes[] = [
  {
    id: new Date("2023-02-01").getTime(),
    category: "Work",
    title: "Reunião de equipe",
    description: "Reunião para discutir o andamento do projeto X.",
    createdAt: new Date("2023-10-25T09:00:00"),
    isChecked: true,
  },
  {
    id: new Date("2023-02-02").getTime(),
    category: "Home",
    title: "Comprar mantimentos",
    description: "Comprar leite, ovos, pão e frutas.",
    createdAt: new Date("2023-10-25T15:30:00"),
    isChecked: true,
  },
  {
    id: new Date("2023-02-03").getTime(),
    category: "Personal",
    title: "Assistir a um filme",
    description: "Assistir ao filme 'O Poderoso Chefão'.",
    createdAt: new Date("2023-10-26T20:00:00"),
    isChecked: false,
  },
  {
    id: new Date("2023-03-04").getTime(),
    category: "Work",
    title: "Estudar para o exame",
    description: "Revisar apontamentos e fazer exercícios práticos.",
    createdAt: new Date("2023-10-27T14:00:00"),
    isChecked: false,
  },
];
