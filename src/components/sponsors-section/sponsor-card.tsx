import React from "react";
import Image from "next/image";
import { Sponsor } from "models/sponsor";
import styles from "../../styles/Sponsors.module.css";

interface SponsorCardProps extends Sponsor {}

const SponsorCard: React.FC<SponsorCardProps> = (sponsor) => {
  return (
    <div className={styles.SponsorCard}>
      <a href={sponsor.url} target="_blank" rel="noreferrer">
        <Image
          unoptimized
          src={sponsor.logo}
          width={150}
          height={150}
          className={styles.SponsorCardBodyImage}
          alt={sponsor.name}
          loading="lazy"
        ></Image>
      </a>
    </div>
  );
};

export default SponsorCard;
