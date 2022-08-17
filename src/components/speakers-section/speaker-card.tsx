/*eslint-disable*/
import Image from "next/image";
import React, { useState } from "react";

import styles from '../../styles/Speakers.module.css'

interface SpeakerCardProps {
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ }) => {
  return (
    <>
      <div className={styles.card_content}>
        <Image className={styles.card_image} src="" width="90%" height="90%" />
        <h2 className={styles.card_name}>Nome Sobrenome</h2>
        <p className={styles.card_location}>Localização</p>
        <p className={styles.card_topic}>Tema</p>
        <p className={styles.card_topic}>Cloud</p>
        <a href="#" className={styles.card_profile}>Ver perfil</a>
      </div>
    </>
  );
}

export default SpeakerCard;

