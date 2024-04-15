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
  new TicketBatch({
    description: "Kit + Inscrição",
    firstSaleDate: new Date("2024-03-21"),
    finalSaleDate: new Date("2024-04-10"),
    title: "2º Lote",
    link: "https://doity.com.br/iwd-cerrado-2024#registration",
    value: 85,
  }),
  new TicketBatch({
    description: "Inscrição (Sem Kit de participante)",
    firstSaleDate: new Date("2024-04-17"),
    finalSaleDate: new Date("2024-04-26"),
    title: "3º Lote",
    link: "https://doity.com.br/iwd-cerrado-2024#registration",
    value: 85,
  }),
];

export default ticketBatches;
