import { Container, Row } from "reactstrap";
import TicketCard from "./ticket-card";
import { TicketBatch } from "models/ticket-batch";
import ticketList from "../../hooks/ticketBatches";
import configValues from "helpers/config";
import styles from "../../styles/Tickets.module.css";

const TicketsSection: React.FC = ({}) => {
  const mapTicketsBatch = (ticket: TicketBatch) => {
    const _classes = [styles.TicketItem];

    if (ticket.isOutOfSale()) _classes.push(styles.TicketItemOff);
    return (
      <li key={ticket.title} className={_classes.join(" ")}>
        <TicketCard ticket={ticket}></TicketCard>
      </li>
    );
  };

  const mailTo = `mailto:${configValues.email}`;

  return (
    <Container>
      <div>
        <h1 className={styles.Title}>Ingressos</h1>
        <div>
          <Row>
            <ul className={styles.TicketsList}>
              {ticketList.map(mapTicketsBatch)}
            </ul>
          </Row>
          <Row>
            <span className={styles.TicketsDisclaimer}>
              ** Temos condições especiais para caravanas e grupos de empresas a
              cada 5 pessoas. Para saber mais envie um email para
              <a
                target="_blank"
                href={mailTo}
                rel="noreferrer"
                className={styles.link}
              >
                {" "}
                {configValues.email}
              </a>
            </span>
            <details>
              <summary>Clique para saber mais</summary>
              <p>
                Reúna um grupo de pelo menos 5 pessoas e garanta descontos nas
                inscrições. Os descontos são validos para pagamento via Pix ou
                transferência.
              </p>
            </details>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default TicketsSection;
