/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "styles/Main.module.css";

const items = [
  "Ouse ser feliz",
  "Ouse ser única",
  "Ouse ser diferente",
  "Ouse ser você mesma",
  "Ouse ser sonhadora",
  "Ouse ser independente",
  "Ouse ser resiliente",
  "Ouse ser destemida",
  "Ouse ser feliz",
  "Ouse ser única",
  "Ouse ser diferente",
  "Ouse ser você mesma",
  "Ouse ser sonhadora",
  "Ouse ser independente",
  "Ouse ser resiliente",
  "Ouse ser destemida",
];

const MainSection: React.FC = ({}) => {
  return (
    <main>
      <Container id="about" fluid>
        <Row>
          <Col lg={6} className={styles.Container}>
            <h1 className={styles.Title}> O que é IWD?</h1>
            <p className={styles.Description}>
              O IWD é um evento anual realizado pelas WTMs de todo o mundo em
              homenagem ao Dia Internacional da Mulher. O programa Women
              Techmakers reuniu mais de 200 eventos globais, em 52 países, para
              trazer visibilidade, comunidade e recursos para as mulheres em
              tecnologia. Teremos 100% de palestrantes mulheres (cis e trans).
              Alguns dos assuntos que serão abordados são: Carreira na TI,
              Ciência de Dados, Mulheres na Computação, UX, Desenvolvimento
              Pessoal, Back-End, Front-End, Inteligência Artificial, Machine
              Learning, APIs do Google, Segurança da Informação (LGPD).
            </p>
          </Col>
          <Col lg={6} className={styles.MediaContainer}>
            {/*<div className={styles.VideoContainer}><iframe src='https://www.youtube.com/embed/8VbKty9jtdM' allowFullScreen></iframe></div>*/}
            <div className={styles.FotoContainer}>
              <img src="fotoEncontroWtm.jpeg" width="100%" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* subir quando pegar as fotos do evento */}

      {/* <section>
        <div className={styles.sliderContainer}>
          <div className={styles.slide}>
            <img src="/fotoEncontroWtm.jpeg" alt="" />
          </div>
          <div className={styles.slide}>
            <img src="/fotoEncontroWtm.jpeg" alt="" />
          </div>
          <div className={styles.slide}>
            <img src="/fotoEncontroWtm.jpeg" alt="" />
          </div>
          <div className={styles.slide}>
            <img src="/fotoEncontroWtm.jpeg" alt="" />
          </div>
        </div>
      </section> */}

      <section>
        <div className={styles.MarqueeOuter}>
          <div className={styles.MarqueeInner}>
            <div className={styles.ConstructItems}>
              {items.map((item, index) => (
                <div key={index} className={styles.ConstructItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
