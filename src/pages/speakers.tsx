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
