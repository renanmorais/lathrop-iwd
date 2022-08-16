/*eslint-disable*/
import React, { useState } from "react";

import styles from '../../styles/Speakers.module.css'
import SpeakerCard from "./speaker-card";

interface SpeakersSectionProps {
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ }) => {
  return (
    <>
      <div className={styles.container}>
        <h1>Palestrantes</h1>
        <p>Speakers at DevFests range from experienced developers to budding leaders of local tech communities all over the world. The individuals that speak at DevFest often drive technical conversations within their companies, cities, countries, and worldwide. At a DevFest near you, expect talks from Googlers, Google Developer Experts, leading engineers, developers, and problem solvers in your own technical communities.</p>
        <div className={styles.cards}>
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </div>
      </div>
    </>
  );
}

export default SpeakersSection;

