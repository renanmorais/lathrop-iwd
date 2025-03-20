import { TicketBatch } from "models/ticket-batch";
import configValues from "helpers/config";

const ticketBatches: Array<TicketBatch> = [
  new TicketBatch({
    description: "Entrada + Kit + Camiseta",
    firstSaleDate: new Date("2025-03-19"),
    finalSaleDate: new Date("2025-04-30"),
    title: "1º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 120,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Entrada + Kit",
    firstSaleDate: new Date("2025-03-19"),
    finalSaleDate: new Date("2025-04-30"),
    title: "1º Lote",
    link: configValues.eventLinkRegistrationUrl,
    value: 90,
    tShirt: false,
  }),
  new TicketBatch({
    description: "Lote promocional com camiseta",
    firstSaleDate: new Date("2025-03-01"),
    finalSaleDate: new Date("2025-03-19"),
    title: "Promocional",
    link: configValues.eventLinkRegistrationUrl,
    value: 90,
    tShirt: true,
  }),
  new TicketBatch({
    description: "Lote promocional sem camiseta",
    firstSaleDate: new Date("2025-03-01"),
    finalSaleDate: new Date("2025-03-19"),
    title: "Promocional",
    link: configValues.eventLinkRegistrationUrl,
    value: 60,
    tShirt: false,
  }),
  // new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-11-05'),
  //     finalSaleDate: new Date('2023-11-23'), title: '2º Lote', link: 'javascript:void(0);', value: 85 }),
];

export default ticketBatches;