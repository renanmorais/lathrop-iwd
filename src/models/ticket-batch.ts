export class TicketBatch {
    title: string;
    description: string;
    value: number;
    link: string;
    firstSaleDate: Date;
    finalSaleDate: Date;
    tShirt: boolean;
  
    constructor({
      title,
      description,
      value,
      link,
      firstSaleDate,
      finalSaleDate,
      tShirt,
    }: {
      title: string;
      description: string;
      value: number;
      link: string;
      firstSaleDate: Date;
      finalSaleDate: Date;
      tShirt?: boolean;
    }) {
      this.title = title;
      this.description = description;
      this.value = value;
      this.link = link;
      this.firstSaleDate = firstSaleDate;
      this.finalSaleDate = finalSaleDate;
      this.tShirt = tShirt || false;
    }
  
    isOutOfSale(): boolean {
      return new Date() > this.finalSaleDate;
    }
  }