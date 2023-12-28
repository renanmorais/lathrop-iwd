import React from "react";
import Image from "next/image";
import { Sponsor } from "models/sponsor";
import styles from "../../styles/Sponsors.module.css";

interface SponsorCardProps extends Sponsor {
  isStaff?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = (sponsor) => {
  return (
    <>
      <div className={styles.SponsorCard}>
        <a href={sponsor.url} target="_blank" rel="noreferrer">
          <div
            className={
              sponsor.isStaff ? styles.StaffCardBody : styles.SponsorCardBody
            }
          >
            <Image
              unoptimized
              src={sponsor.logo}
              layout="fill"
              objectFit="contain"
              className={styles.SponsorCardBodyImage}
              alt=""
            ></Image>
          </div>
        </a>
      </div>
    </>
  );
};

export default SponsorCard;
