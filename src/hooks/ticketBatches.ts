import { TicketBatch } from "models/ticket-batch";

const ticketBatches: Array<TicketBatch> = [
  new TicketBatch({
    description: "Kit + Inscrição",
    firstSaleDate: new Date("2024-01-10"),
    finalSaleDate: new Date("2024-02-21"),
    title: "Lote promocional",
    link: "https://doity.com.br/iwd-cerrado-2024#registration",
    value: 65,
  }),
  new TicketBatch({
    description: "Kit + Inscrição",
    firstSaleDate: new Date("2024-02-22"),
    finalSaleDate: new Date("2024-03-21"),
    title: "1º Lote",
    link: "https://doity.com.br/iwd-cerrado-2024#registration",
    value: 70,
  }),
  // new TicketBatch({
  //   description: "Entrada + Kit",
  //   firstSaleDate: new Date("2024-04-15"),
  //   finalSaleDate: new Date("2024-04-15"),
  //   title: "3º Lote",
  //   link: "https://doity.com.br/iwd-cerrado-2024#registration",
  //   value: 75,
  // }),
];

export default ticketBatches;
