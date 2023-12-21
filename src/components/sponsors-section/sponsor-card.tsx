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
              alt=""
              unoptimized
              src={sponsor.logo}
              className={styles.SponsorCardBodyImage}
              width={100}
              height={100}
            ></Image>
          </div>
        </a>
      </div>
    </>
  );
};

export default SponsorCard;
