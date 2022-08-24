/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useState } from "react";
import styles from '../../styles/Sponsors.module.css'
import Image from 'next/image'


interface SponsorCardProps extends Sponsor { }

const SponsorCard: React.FC<SponsorCardProps> = (sponsor) => {
    return (
        <>
            <div className={styles.SponsorCard}>
                <a href={sponsor.url} target="_blank">
                    <div className={styles.SponsorCardBody}>
                        <Image src={sponsor.logo} layout="fill"
                            objectFit="contain"></Image>
                    </div>
                </a>
            </div>
        </>
    );
}

export default SponsorCard;

