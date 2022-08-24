/*eslint-disable*/
import React, { useState, useEffect } from "react";

import styles from 'styles/Home.module.css';
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";


import HappyFace from '../../assets/images/happy-face.svg';
import { Col, Row } from "reactstrap";

import Image from 'next/image'

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
            <div className={styles.MainInnerFull}>
                {/*<Image src={HappyFace} width="100" height="100" />*/}
                <div className={styles.MainInnerFullContent}>
                    <Col className={styles.MainInnerFullDescription}>
                        <h2>
                            Dia 26 Novembro 2022
                        </h2>
                        <h3>
                            Local: Varanda 42 - Uberlândia
                        </h3>
                    </Col>
                    <Row style={{ marginTop: '15px' }}>
                        <Col> <a className={styles.RegisterButton} href="#">Inscreva-se</a> </Col>
                    </Row>
                </div>

            </div >

            <section>
                <div className={styles.MainDescriptionMinWrapper}>

                    <div className={styles.MainDescriptionMin}>
                        <Col className={styles.MainInnerFullDescription}>
                            <h4>
                                Dia 26 Novembro 2022
                            </h4>
                            <p>
                                Local: Varanda 42 - Uberlândia
                            </p>
                        </Col>
                        <Row style={{ marginTop: '15px' }}>
                            <Col> <a className={styles.RegisterButton} href="#">Inscreva-se</a> </Col>
                        </Row>
                    </div>
                </div>
            </section>

            <section className={styles.Counter}>
                <ul className={styles.CounterList}>
                    {Object.keys(DATE_DISTANCE_LABELS).map(key => (
                        <li className={styles.CounterListItem} key={key}>
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

