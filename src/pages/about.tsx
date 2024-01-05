import React from "react";
import { Row, Container } from "reactstrap";
import BaseLayout from "../layouts/base-layout";
import styles from "../styles/About.module.css";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className={styles.pageDiv}>
      <Container fluid>
        <h1 className={styles.pageTitle}>Sobre o IWD</h1>
        <p className={styles.pageDescription}>
          O IWD é um evento anual realizado pelas WTMs de todo o mundo em
          homenagem ao Dia Internacional da Mulher. O programa Women Techmakers
          reuniu mais de 200 eventos globais, em 52 países, para trazer
          visibilidade, comunidade e recursos para as mulheres em tecnologia.
          Teremos 100% de palestrantes mulheres (cis e trans). Alguns dos
          assuntos que serão abordados são: Carreira na TI, Ciência de Dados,
          Mulheres na Computação, UX, Desenvolvimento Pessoal, Back-End,
          Front-End, Inteligência Artificial, Machine Learning, APIs do Google,
          Segurança da Informação (LGPD).
        </p>
        <section>
          <Row className={styles.pageRow}></Row>
        </section>
      </Container>
    </div>
  );
};

About.layout = BaseLayout;

export default About;
