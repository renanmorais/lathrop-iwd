/*eslint-disable*/
import Image from 'next/image'
import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";


import styles from '../../styles/Home.module.css'
import configValues from "../../../config-values";
import { changeTimeZone, calcDateDistance } from "../../helpers/date";


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
        const _result = calcDateDistance(changeTimeZone(configValues.eventDate, 'America/Sao_Paulo'));
        if (_result.distance < 0) {
            clearInterval(_interval)
            return
        }
        _setDateDistance(_result);
    }, 1000);

    return (
        <>
            <div className={styles.BgWrap}>
                <div className={styles.BgImageFull}></div>
            </div>

            <div className={styles.BgWrap}>
                <div className={styles.BgImageMin}></div>
            </div>

            <div className={styles.mainInner}>

            </div>
            <Container fluid>
                <div className={styles.counter}>
                    <Row style={{ display: 'flex' }}>
                        <Col><div className={styles.cardCounter}><span>{_dateDistance.days}</span>dias</div></Col>
                        <Col><div className={styles.cardCounter}><span>{_dateDistance.hours} </span>horas</div></Col>
                        <Col className={styles.hideSmall}><div className={styles.cardCounter}><span>{_dateDistance.minutes} </span>minutos</div></Col>
                        <Col className={styles.hideSmall}><div className={styles.cardCounter}><span>{_dateDistance.seconds} </span>segundos</div></Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default HomeHeader;

