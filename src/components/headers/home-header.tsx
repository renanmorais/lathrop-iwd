/*eslint-disable*/
import React, {useState, useEffect} from "react";

import styles from 'styles/Home.module.css';
import configValues from "helpers/config";
import {changeTimeZone, calcDateDistance} from "helpers/date";
import {Col, Row} from "reactstrap";

interface HomeHeaderProps {
}


const DATE_DISTANCE_LABELS: Record<string, string> = {
    days: 'dias',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos',
}

const HomeHeader: React.FC = ({}) => {
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
                <div className={styles.BgImageFull}/>
            </div>

            {/*<div className={styles.BgWrap2}>*/}
            {/*    /!*<img className={styles.HappyFaceImg} src='happy-face.svg' width="100" height="100" />*!/*/}
            {/*    /!*<img className={styles.ContentImg} src='content.svg' width="148" height="121" />*!/*/}
            {/*    /!*<img className={styles.CommunityImg} src='community.svg' width="170" height="87" />*!/*/}
            {/*    /!*<img className={styles.BellImg} src='bell.svg' width="170" height="107" />*!/*/}
            {/*    <img className={styles.GlobalImg} src='logoiwdcerrado.png' width="333" height="333" />*/}
            {/*    /!*<img className={styles.ComplexImg} src='complex.svg' width="378" height="157" />*!/*/}
            {/*</div>*/}

            {/*<div className={styles.BgWrap3}>*/}
            {/*    <img className={styles.GlobalImg} src='logowtm.png' width="360" height="46" />*/}
            {/*</div>*/}

            {/*<div className={styles.BgWrap2}>*/}
            {/*    <div>*/}
            {/*        <Row style={{textAlign: 'center'}}>*/}
            {/*            <Col> <img src='logoiwdcerrado.png' width="333" height="333"/>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*        <Row style={{textAlign: 'center'}}>*/}
            {/*            <Col> <img src='logowtm.png' width="360" height="46"/> </Col>*/}
            {/*        </Row>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className={styles.MainInnerFull}>
                {/**/}
                <div className={styles.MainInnerFullContent}>
                    <Col className={styles.MainInnerFullDescription}>
                        <Row style={{textAlign: 'center'}}>
                            <Col> <img src='logoiwdcerrado.png' width="333" height="333"/>
                            </Col>
                        </Row>
                        <Row style={{textAlign: 'center', paddingBottom: '20px'}}>
                            <Col> <img src='logowtm.png' width="360" height="46"/> </Col>
                        </Row>
                        <Row style={{textAlign: 'center'}}>
                            <Col>
                                <h1>
                                    {configValues.formattedDate}
                                </h1>
                                <h4>
                                    {configValues.place}
                                </h4>
                            </Col>
                        </Row>
                    </Col>
                    <Row style={{marginTop: '15px', textAlign: 'center'}}>
                        <Col> <a className={styles.RegisterButton}
                                 href={configValues.eventLinkRegistrationUrl}>Inscreva-se</a> </Col>
                    </Row>
                </div>

            </div>

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
                        <Row style={{marginTop: '15px'}}>
                            <Col> <a className={styles.RegisterButton}
                                     href={configValues.eventLinkRegistrationUrl}>Inscreva-se</a> </Col>
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

