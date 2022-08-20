/*eslint-disable*/
import React, { useState, useEffect } from "react";

import styles from 'styles/Home.module.css';
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";

interface HomeHeaderProps {
}

const DATE_DISTANCE_LABELS: Record<string, string> = {
    days: 'dias',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ }) => {
    const [_dateDistance, _setDateDistance] = useState({
        distance: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    } as Record<string, number>);

    useEffect(() => {
        const _interval = setInterval(function () {
            const _result = calcDateDistance(changeTimeZone(configValues.eventDate, 'America/Sao_Paulo'));

            if (_result.distance < 0) {
                clearInterval(_interval)
                return
            }

            _setDateDistance(_result);
        }, 1000);

        return () => {
            clearInterval(_interval)
        }
    }, [])


    return (
        <>
            <div className={styles.BgWrap}>
                <div className={styles.BgImageFull} />
            </div>
            <div className={styles.BgWrap}>
                <div className={styles.BgImageMin} />
            </div>
            <div className={styles.mainInner} />

            <section className={styles.Counter}>
                <ul className={styles.CounterList}>
                    {Object.keys(DATE_DISTANCE_LABELS).map(key => (
                        <li className={styles.CounterListItem}>
                            <span className={styles.CounterListItem__time}>{_dateDistance[key]}</span>
                            {DATE_DISTANCE_LABELS[key]}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default HomeHeader;

