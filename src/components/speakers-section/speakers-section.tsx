/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { Container, Carousel, CarouselItem, CarouselControl } from "reactstrap";
import _speakers from "../../hooks/useSpeakers";
import { Speaker } from "models/speaker";
import SpeakerCard from "./speaker-card";
import Bubble from "components/bubble";
import styles from "../../styles/Speakers.module.css";

interface SpeakersSectionProps {
  speakers: Array<Speaker>;
}

// const SpeakersSection: React.FC<SpeakersSectionProps> = ({speakers}) => {
const SpeakersSection: React.FC<SpeakersSectionProps> = ({}) => {
  const speakers: Array<Speaker> = _speakers;
  const [activeIndex, setActiveIndex] = useState(0);

  const speakersChunk = (array: Array<Speaker>, size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  let _chunckSize = 3;
  const _speakersChuncked = speakersChunk(speakers, _chunckSize);

  const next = () => {
    const nextIndex =
      activeIndex === _speakersChuncked.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex =
      activeIndex === 0 ? _speakersChuncked.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const displaySpeakers = _speakersChuncked.map(
    (speakersList: Array<Speaker>, index: number) => {
      return (
        <CarouselItem key={`${index}-carousel-item`}>
          <div className={styles.carousel_inner}>
            {speakersList.map((speaker: Speaker) => {
              const _itemId: number | undefined = speaker.id;
              return (
                <div
                  key={`${_itemId}-carousel-col`}
                  className={styles.card_container}
                >
                  <SpeakerCard {...speaker} />
                </div>
              );
            })}
          </div>
        </CarouselItem>
      );
    }
  );

  return (
    <>
      <Container>
        <div id="speakers" className={styles.container}>
          <h1 className={styles.Title}>Palestrantes</h1>
          <p style={{ textAlign: "justify", textAlignLast: "center" }}>
            O time de palestrantes do IWD Cerrado 2023 traz grandes nomes da
            área técnica e referências em liderança de comunidades. Reunimos em
            um só evento Google Developer Experts (GDEs), Tech Leads, pessoas
            desenvolvedoras e principalmente pessoas resolvedoras de problemas.
            Esse é um evento que visa fomentar a comunidade de tecnologia, indo
            além de conhecimento técnico, contando com muita interatividade,
            conexões e diversidade.
          </p>
          <div className={styles.cards}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              ride="carousel"
              className={styles.carousel}
              style={{ width: "100%" }}
            >
              {displaySpeakers}
              <div className={styles.carousel_prev}>
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
              </div>
              <div className={styles.carousel_next}>
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </div>
            </Carousel>
          </div>
          <div className={styles.button_container}>
            <a className={styles.button} href="/speakers">
              Ver todos
            </a>
          </div>
        </div>
      </Container>
      <Bubble text="International Women's Day 2024" />
    </>
  );
};

export default SpeakersSection;
