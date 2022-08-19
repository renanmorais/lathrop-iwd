/*eslint-disable*/
import React, { useState } from "react";
import {
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import speakers from '../../hooks/useSpeakers';

import styles from '../../styles/Speakers.module.css'
import SpeakerCard from "./speaker-card";

type Speaker = {
  id: number;
  speaker_name: string;
  location: {
    city: string;
    uf: string;
  };
  topic: string;
  title: string;
}

interface SpeakersSectionProps {
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const speakersChunk = (array: Array<Speaker>, size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size),
    )
  };

  const speakersChunkByFive = speakersChunk(speakers, 5);
  const speakersByGroup = speakersChunkByFive.map(item => item.map(item => item));
  const filterSpeakers = speakersByGroup.filter(item => item.map(item => { item }))
  console.log(filterSpeakers);

  const next = () => {
    const nextIndex = activeIndex === speakers.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? speakers.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
  };


  const displaySpeakers = speakers.map((speaker) => {
    return (
      <CarouselItem
        key={speaker.id}
      >
        <Col key={speaker.id} className={styles.card_container}>
          <SpeakerCard
            id={speaker.id}
            speaker_name={speaker.speaker_name}
            location={speaker.location}
            topic={speaker.topic}
            title={speaker.title}
          />
        </Col>
      </CarouselItem>
    )
  })

  return (
    <>
      <Container>
        <div className={styles.container}>
          <h1>Palestrantes</h1>
          <p>Speakers at DevFests range from experienced developers to budding leaders of local tech communities all over the world. The individuals that speak at DevFest often drive technical conversations within their companies, cities, countries, and worldwide. At a DevFest near you, expect talks from Googlers, Google Developer Experts, leading engineers, developers, and problem solvers in your own technical communities.</p>
          <div className={styles.cards}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className={styles.carousel}
            >
              <CarouselIndicators
                items={speakers}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                className={styles.carousel_indicators}
              />
              {displaySpeakers}
            </Carousel>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SpeakersSection;

