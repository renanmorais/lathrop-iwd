/* eslint-disable @next/next/no-img-element */
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
          O <abbr title="International Women's Day">IWD</abbr> é um evento anual realizado pelas <abbr title="Women Techmakers">WTMs</abbr> de todo o mundo em
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

        <section>
          <div className={styles.sliderContainer}>
            <div className={styles.slide}>
              <img src="/photos/iwd2023AllPeople.jpg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023StaffSpeakers.jpg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023StaffSpeakersFull.JPG" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023StaffSpeakersFullBright.JPG" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023Outside1.JPG" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="/photos/iwd2023Outside2.JPG" alt="" />
            </div>
          </div>
        </section>

        <div className={styles.toastContainer}>
          <span>Impact the Future</span>
          <span className={styles.toastContent}></span>
        </div>
      </Container>
    </div>
  );
};

About.layout = BaseLayout;

export default About;
