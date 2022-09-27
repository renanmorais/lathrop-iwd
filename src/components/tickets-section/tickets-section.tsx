/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";


import styles from '../../styles/Tickets.module.css'
import TicketCard from "./ticket-card";



const TicketsSection: React.FC = ({ }) => {
    return (
        <>
            <Container style={{ marginBottom: '60px' }}>
                <div id={styles.Tickets}>
                    <h4>
                        Ingressos
                    </h4>
                    <div>

                        <Row style={{ justifyContent: 'center' }}>
                            <ul className={styles.TicketsList}>
                                <li className={styles.TicketItem}>
                                    <TicketCard outOfSale={false} title={""} description={""} value={0} link={""}></TicketCard>
                                </li>
                                <li className={[styles.TicketItem, styles.TicketItemOff].join(' ')} >
                                    <TicketCard outOfSale={true} title={""} description={""} value={0} link={""}></TicketCard>
                                </li>
                            </ul>
                        </Row>
                        <Row>
                            <span className={styles.TicketsDisclaimer}>** Temos condições especiais para caravanas e grupos de empresas a cada 5 pessoas, <a>Veja mais detalhes</a></span>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default TicketsSection;

