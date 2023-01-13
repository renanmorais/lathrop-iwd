import { TicketBatch } from "models/ticket-batch";

const ticketBatches: Array<TicketBatch> = [
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-01-01'), finalSaleDate: new Date('2023-02-15'), title: '1º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 55 }),
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-02-15'), finalSaleDate: new Date('2023-03-15'), title: '2º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 65 }),
    new TicketBatch({ description: 'Entrada + Kit', firstSaleDate: new Date('2023-03-30'), finalSaleDate: new Date('2023-04-15'), title: '3º Lote', link: 'https://doity.com.br/iwd-cerrado-2023#registration', value: 75 }),
]

export default ticketBatches;