import { TicketBatch } from "models/ticket-batch";

const ticketBatches: Array<TicketBatch> = [
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-01-01'), finalSaleDate: new Date('2023-03-06'), title: '1º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 55 }),
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-03-07'), finalSaleDate: new Date('2023-03-20'), title: '2º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 60 }),
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-03-20'), finalSaleDate: new Date('2023-04-15'), title: '3º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 75 }),
]

export default ticketBatches;