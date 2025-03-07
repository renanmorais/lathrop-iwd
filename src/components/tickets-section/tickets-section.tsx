/* eslint-disable @next/next/no-sync-scripts */
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
    <Container id="tickets">
      <div>
        <h1 className={styles.Title}>Ingressos</h1>
        <details>
          <summary className={styles.summaryDoity}>
            🔗 Clique aqui para se inscrever diretamente pelo formulário do
            Doity ou utilize o botão &apos;Comprar&apos; abaixo!
          </summary>
          <script
            src="https://doity.com.br/js/box_inscricao.js"
            type="text/javascript"
          ></script>{" "}
          <iframe
            scrolling="0"
            id="iframe-inscricao"
            style={{ width: "100%", height: "500px", border: "none" }}
            src="https://doity.com.br/iwd-cerrado-2025/passo1?box=1"
          >
            {" "}
          </iframe>{" "}
          <p
            style={{
              textAlign: "center",
              color: "#666672",
              fontSize: "14px",
              fontFamily: "'Open Sans',Helvetica, Arial, sans-serif",
              fontWeight: "bolder",
            }}
          >
            {" "}
            Caso n&atilde;o consiga fazer a inscri&ccedil;&atilde;o{" "}
            <a
              target="_blank"
              href="https://doity.com.br/iwd-cerrado-2025"
              rel="noreferrer"
            >
              clique aqui{" "}
            </a>{" "}
          </p>
        </details>
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
