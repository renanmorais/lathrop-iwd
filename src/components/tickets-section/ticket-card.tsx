
import { TicketBatch } from "models/ticket-batch";
import React from "react";

import styles from '../../styles/Tickets.module.css'


interface TicketProps extends TicketBatch {
}

const TicketCard: React.FC<TicketProps> = (ticket) => {

    const buttonClasses = ['DangerButton'];

    if (ticket.outOfSale) buttonClasses.push('DisableButton');

    return (
        <>
            <h4 className={styles.TicketItemTitle} >1º Lote</h4>
            <p className={styles.TicketItemDescription}>Com camiseta</p>
            <p className={styles.TicketItemPrice}>R$ 70</p>
            <div >
                <a target="_blank" className={buttonClasses.join(' ')} href="#">Comprar</a>
            </div>
        </>
    );
}

export default TicketCard;

