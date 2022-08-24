/*eslint-disable*/
import React, { useState, useEffect } from "react";

import styles from 'styles/Home.module.css';
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";
import { Col, Row } from "reactstrap";

interface HomeHeaderProps {
}





const DATE_DISTANCE_LABELS: Record<string, string> = {
    days: 'dias',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
}

const HomeHeader: React.FC = ({ }) => {
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

                <div className={styles.ScrollDown}>
                    <svg className={styles.ScrollDownSvg} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 25.166666 37.8704414" enable-background="new 0 0 25.166666 37.8704414">
                        <path className={styles.ScrollDownStroke} fill="none" stroke="#c7c4b8" stroke-width="2.5" stroke-miterlimit="10" d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"></path>
                        <path className={styles.ScrollDownScroller} fill="#c7c4b8" d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"></path>
                    </svg>
                </div>
            </div>

            <div className={styles.BgWrap2}>
                <img className={styles.HappyFaceImg} src='happy-face.svg' width="100" height="100" />
                <img className={styles.ContentImg} src='content.svg' width="148" height="121" />
                <img className={styles.CommunityImg} src='community.svg' width="170" height="87" />
                <img className={styles.BellImg} src='bell.svg' width="170" height="107" />
                <img className={styles.GlobalImg} src='global.svg' width="110" height="109" />
                <img className={styles.ComplexImg} src='complex.svg' width="378" height="157" />
            </div>
            <div className={styles.BgWrap}>
                <div className={styles.BgImageMin} />
            </div>
            <div className={styles.MainInnerFull}>
                {/**/}
                <div className={styles.MainInnerFullContent}>
                    <Col className={styles.MainInnerFullDescription}>
                        <h1>
                            {configValues.formattedDate}
                        </h1>
                        <h4>
                            {configValues.place}
                        </h4>
                    </Col>
                    <Row style={{ marginTop: '15px' }}>
                        <Col> <a className={styles.RegisterButton} href={configValues.eventLinkRegistrationUrl}>Inscreva-se</a> </Col>
                    </Row>
                </div>

            </div >

            <section>
                <div className={styles.MainDescriptionMinWrapper}>

                    <div className={styles.MainDescriptionMin}>
                        <Col className={styles.MainInnerFullDescription}>
                            <h4>
                                {configValues.formattedDate}
                            </h4>
                            <p>
                                {configValues.place}
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

