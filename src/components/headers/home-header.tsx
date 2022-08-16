/*eslint-disable*/
import React, { useState } from "react";

import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import configValues from "../../../config-values";
import { counter } from "./counter";
import { changeTimeZone } from "../../helpers/date";

interface HomeHeaderProps {
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ }) => {
    const [_dateDistance, _setDateDistance] = useState({
        distance: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const _interval = setInterval(function () {
        const _result = counter(changeTimeZone(configValues.eventDate, 'America/Sao_Paulo'));
        if (_result.distance < 0) {
            clearInterval(_interval)
            return
        }
        _setDateDistance(_result);
    }, 1000);

    return (
        <>
            <div className={styles.bgWrap}>
                <Image src="/Header.svg" layout='fill' objectFit="contain" alt=""></Image>
            </div>
            <div className={styles.mainInner}>
                <Image src='/elements.svg' width={400} height={400}></Image>
            </div>
            <div className={styles.counter}>
                <div className={styles.cardCounter}><span>{_dateDistance.days}</span>dias</div>
                <div className={styles.cardCounter}><span>{_dateDistance.hours} </span>horas</div>
                <div className={styles.cardCounter}><span>{_dateDistance.minutes} </span>minutos</div>
                <div className={styles.cardCounter}><span>{_dateDistance.seconds} </span>segundos</div>
            </div>
        </>
    );
}

export default HomeHeader;

