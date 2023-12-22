/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "styles/OlderEvents.module.css";

const OlderEvenstsSection: React.FC = ({}) => {
  return (
    <>
      <Container id="about">
        <Row>
          <Col lg={6} sm={12}>
            <h1> O que é o IWD? </h1>
            <p className={styles.Description}>
              O IWD é um evento anual realizado pelos WTMs de todo o mundo com o
              objetivo de celebrar as conquistas das mulheres em tecnologia. A
              grade deste evento não aborda apenas tecnologias Google, mas toda
              e qualquer pauta de interesse da comunidade para essa celebração.
            </p>
          </Col>
          <Col lg={6} sm={12}>
            {/*<div className={styles.VideoContainer}><iframe src='https://www.youtube.com/embed/8VbKty9jtdM' allowFullScreen></iframe></div>*/}
            <div className={styles.VideoContainer}>
              <img src="fotoEncontroWtm.jpeg" width="635px" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className={styles.MarqueeOuter}>
        <div className={styles.MarqueeInner}>
          <div className={styles.ConstructItems}>
            <div className={styles.ConstructItem}>Ouse ser feliz!</div>
            <div className={styles.ConstructItem}>Ouse ser única!</div>
            <div className={styles.ConstructItem}>Ouse ser diferente!</div>
            <div className={styles.ConstructItem}>Ouse ser você mesma!</div>
            <div className={styles.ConstructItem}>Ouse ser sonhadora!</div>
            <div className={styles.ConstructItem}>Ouse ser a primeira!</div>
            <div className={styles.ConstructItem}>Ouse ser otimista!</div>
            <div className={styles.ConstructItem}>Ouse ser destemida!</div>
            <div className={styles.ConstructItem}>Ouse ser feliz!</div>
            <div className={styles.ConstructItem}>Ouse ser única!</div>
            <div className={styles.ConstructItem}>Ouse ser diferente!</div>
            <div className={styles.ConstructItem}>Ouse ser você mesma!</div>
            <div className={styles.ConstructItem}>Ouse ser sonhadora!</div>
            <div className={styles.ConstructItem}>Ouse ser a primeira!</div>
            <div className={styles.ConstructItem}>Ouse ser otimista!</div>
            <div className={styles.ConstructItem}>Ouse ser destemida!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlderEvenstsSection;
