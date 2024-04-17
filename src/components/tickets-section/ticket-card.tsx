import React from "react";
import { TicketBatch } from "models/ticket-batch";
import styles from "../../styles/Tickets.module.css";

interface TicketProps {
  ticket: TicketBatch;
}

const TicketCard: React.FC<TicketProps> = ({ ticket }) => {
  const buttonClasses = ["DangerButton"];

  if (ticket.isOutOfSale()) buttonClasses.push("DisableButton");

  const mapPurchaseButton = () => {
    if (new Date() < ticket.firstSaleDate) {
      return (
        <>
          <span>* Não iniciado </span>
          <span className={styles.TicketNotInitiadedDate}>
            {ticket.firstSaleDate.toLocaleDateString("pt-br") + ' às 20h00'}
          </span>
        </>
      );
    } else
      return (
        <div>
          <a
            target="_blank"
            className={ticket.isOutOfSale() ? styles.btnEnd : styles.btn}
            rel="noreferrer"
            href={ticket.link}
          >
            {ticket.isOutOfSale() ? "Esgotado" : "Comprar"}
          </a>
        </div>
      );
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4 className={styles.heading}>{ticket.title}</h4>
        <p className={styles.para}>{ticket.description}</p>
        <p className={styles.para}>R$ {ticket.value},00</p>
        {mapPurchaseButton()}
      </div>
    </div>
  );
};

export default TicketCard;
