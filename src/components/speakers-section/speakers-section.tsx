/*eslint-disable*/
import React, { useState } from "react";
import {
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
} from "reactstrap";
import speakers from '../../hooks/useSpeakers';

import styles from '../../styles/Speakers.module.css'
import SpeakerCard from "./speaker-card";

const SpeakersSection: React.FC = ({ }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const keyNumber = activeIndex + 1;

  const speakersChunk = (array: Array<Speaker>, size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size,),
    )
  };

  const speakersChunkByFive = speakersChunk(speakers, 5);

  const next = () => {
    const nextIndex = activeIndex === speakersChunkByFive.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? speakersChunkByFive.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
  };


  const displaySpeakers = speakersChunkByFive.map(speaker => {
    return (
      <CarouselItem
        key={speaker[activeIndex].id}
      >
        <div className={styles.carousel_inner}>
          {speaker.map(speaker => {
            return (
              <Col key={speaker.id} className={styles.card_container}>
                <SpeakerCard
                  id={speaker.id}
                  speaker_name={speaker.speaker_name}
                  location={speaker.location}
                  topic={speaker.topic}
                  title={speaker.title}
                />
              </Col>
            )
          })}
        </div>
      </CarouselItem>
    )
  })

  return (
    <>
      <Container>
        <div className={styles.container}>
          <h1>Palestrantes</h1>
          <p>
            As pessoas palestrantes do Devfest possuem uma variedade de experiências, que vão desde pessoas desenvolvedoras experientes à lideres de comunidades. As pessoas que palestram com frenquência se engajam em conversas técnicas em suas empresas, cidades e países. No Devfest você pode esperar palestras de Google Developer Experts, Tech Leads, pessoas desenvolvedoras e resolvedores de problemas.
          </p>
          <div className={styles.cards}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className={styles.carousel}
            >
              <CarouselIndicators
                items={speakersChunkByFive}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                className={styles.carousel_indicators}
              />
              {displaySpeakers}
            </Carousel>
          </div>
          <div className={styles.button_container}>
            <Button
              color="info"
              outline
            >
              Ver todos
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SpeakersSection;

