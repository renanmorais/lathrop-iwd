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
      <div className={styles.card_content} onClick={modalToggle}>
        <Image
          unoptimized
          className={styles.card_image}
          src={speaker.photo ? speaker.photo : ""}
          alt={`Foto de ${speaker.name}`}
          width="100%"
          height="100%"
        />
        <h2 className={styles.card_name}>{speaker.name}</h2>
        <p className={styles.card_topic}>{speaker.tech}</p>
        <p className={styles.card_profile}>{speaker.title}</p>
      </div>
      <SpeakerModal
        speaker={speaker}
        modalOpen={modalOpen}
        modalToggle={modalToggle}
      />
    </>
  );
};

export default SpeakerCard;
