import { Container, Col } from "reactstrap";
import Bubble from "components/bubble";
import styles from "../../styles/Location.module.css";

const LocationSection: React.FC = () => {
  return (
    <>
      <Container className={styles.Container}>
        <div>
          <h1 className={styles.Title}>Local</h1>
          <Col>
            <h2 className={styles.h2}>A definir</h2>
            <p className={styles.paragraph}>Algum lugar</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.085672945721!2d-48.54724452403411!3d-16.112868430879356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935be3bbcb15b59b%3A0x502565924144034e!2sAlgum%20lugar!5e0!3m2!1spt-BR!2sbr!4v1704504934317!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </div>
      </Container>
      <Bubble text="<> Impact the Future <> Impacte o Futuro <>" />
    </>
  );
};

export default LocationSection;
