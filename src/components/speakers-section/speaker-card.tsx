/*eslint-disable*/
import { Speaker } from "models/speaker";
import Image from "next/image";
import React, { useState } from "react";

import ProfileImage from '../../assets/images/ProfileImage.svg';
import styles from '../../styles/Speakers.module.css'


interface SpeakerCardProps extends Speaker {
}

const SpeakerCard: React.FC<SpeakerCardProps> = (speaker) => {
  return (
    <>
      <div className={styles.card_content}>
        <Image className={styles.card_image} src={speaker.photo} alt={`Foto ${speaker.name}`} width="90%" height="90%" />
        <h2 className={styles.card_name}>{speaker.name}</h2>
        {/*<p className={styles.card_topic}>Tema</p>*/}
        <p className={styles.card_topic}>{speaker.topic}</p>
        <p className={styles.card_profile}>{speaker.title}</p>
        {/*<p className={styles.card_location}>{speaker.companyTitle}</p>*/}
      </div>
    </>
  );
}

export default SpeakerCard;

