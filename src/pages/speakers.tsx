import React from "react";
import { Col, Row, Container } from "reactstrap";
import _speakers from "../hooks/useSpeakers";
import BaseLayout from "../layouts/base-layout";
import SpeakerCard from "components/speakers-section/speaker-card";
import { Speaker } from "models/speaker";
import { getSpeakers } from "front-features/speakers";
import styles from "../styles/Speakers.module.css";

interface SpeakersPageProps {
  speakers: Array<Speaker>;
}

// const SpeakersPage = ({ speakers }: SpeakersPageProps) => {
const SpeakersPage = ({}: SpeakersPageProps) => {
  const speakers: Array<Speaker> = _speakers;
  const constructSpeakerCol = (_speaker: Speaker) => {
    return (
      <Col
        lg="4"
        key={_speaker.id}
        className={`${styles.card_container} ${styles.pageCol}`}
      >
        <SpeakerCard {..._speaker} />
      </Col>
    );
  };

  return (
    <div className={styles.pageDiv}>
      <Container fluid>
        <h1 className={styles.pageTitle}>Palestrantes</h1>
        <p className={styles.pageDescription}>
          As pessoas palestrantes do IWD possuem uma variedade de experiências,
          que vão desde pessoas desenvolvedoras experientes à lideres de
          comunidades. As pessoas que palestram com frenquência se engajam em
          conversas técnicas em suas empresas, cidades e países. No IWD você
          pode esperar palestras de Google Developer Experts, Tech Leads,
          pessoas desenvolvedoras e resolvedores de problemas.
        </p>
        <section>
          <Row className={styles.pageRow}>
            {speakers.map((speaker) => constructSpeakerCol(speaker))}
          </Row>
        </section>
        <div className={styles.call4Papers}>
          <button className={styles.call4PapersButton}>
            <a
              className={styles.call4PapersLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6NywB6rWfRrDYYCw1wWxEOSQ9cZSMSCSVpzXvkZmvYPi_3A/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.call4PapersSpan}>
                Quero palestrar no IWD Cerrado 2024
              </span>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    return {
      props: {
        speakers: await getSpeakers(),
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { speakers: [] } };
  }
}

SpeakersPage.layout = BaseLayout;

export default SpeakersPage;
