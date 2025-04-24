/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { Speaker } from "models/speaker";
import SpeakerModal from "./speaker-modal";
import styles from "../../styles/Speakers.module.css";

interface SpeakerCardProps extends Speaker {}

const SpeakerCard: React.FC<SpeakerCardProps> = (speaker) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalToggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <Image
        className={styles.card_image}
        src={speaker.photo ? speaker.photo : ""}
        alt={`Foto de ${speaker.name}`}
        width="250"
        height="250"
        unoptimized
        onClick={modalToggle}
        loading="lazy"
      />
      <h2 className={styles.card_name}>{speaker.name}</h2>
      <p className={styles.card_topic}>{speaker.tech}</p>
      <SpeakerModal
        speaker={speaker}
        modalOpen={modalOpen}
        modalToggle={modalToggle}
      />
    </>
  );
};

export default SpeakerCard;
