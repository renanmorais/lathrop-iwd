import React from "react";
import { TicketBatch } from "models/ticket-batch";
import styles from "../../styles/Tickets.module.css";

interface TicketProps {
  ticket: TicketBatch;
}

const TicketCard: React.FC<TicketProps> = ({ ticket }) => {
  const mapPurchaseButton = () => {
    if (new Date() < ticket.firstSaleDate) {
      return (
        <>
          <span>* Não iniciado </span>
          <span className={styles.TicketNotInitiadedDate}>
            {ticket.firstSaleDate.toLocaleDateString("pt-br") + " às 20h00"}
          </span>
        </>
      );
    } else
      return (
        <div className={styles.action}>
          <a
            target="_blank"
            className={ticket.isOutOfSale() ? styles.buttonEnd : styles.button}
            rel="noreferrer"
            href={ticket.link}
          >
            {ticket.isOutOfSale() ? "Esgotado" : "Comprar"}
          </a>
        </div>
      );
  };

  return (
    // <div className={styles.card}>
    //   <div className={styles.content}>
    //     <h4 className={styles.heading}>{ticket.title}</h4>
    //     <p className={styles.para}>{ticket.description}</p>
    //     <p className={styles.para}>R$ {ticket.value},00</p>
    //     {mapPurchaseButton()}
    //   </div>
    // </div>
    <div className={styles.plan}>
      <div className={styles.inner}>
        <span className={styles.pricing}>
          <span>R$ {ticket.value},00</span>
        </span>
        <p className={styles.title}>{ticket.title}</p>
        <p className={styles.info}>
          {ticket.tShirt
            ? "Este ingresso inclui entrada no evento presencial + kit do participante + camiseta oficial"
            : "Este ingresso inclui entrada no evento presencial + kit do participante"}
        </p>
        <ul className={styles.features}>
          <li>
            <span className={styles.icon}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>Entrada</span>
          </li>
          <li>
            <span className={styles.icon}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                ></path>
              </svg>
            </span>
            <span>Kit</span>
          </li>
          <li>
            <span
              className={`${styles.icon} ${
                ticket.tShirt ? styles.icon : styles.iconNoTShirt
              }`}
            >
              {ticket.tShirt ? (
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              )}
            </span>
            <span>Camiseta</span>
          </li>
        </ul>
        <div className={styles.action}>{mapPurchaseButton()}</div>
      </div>
    </div>
  );
};

export default TicketCard;