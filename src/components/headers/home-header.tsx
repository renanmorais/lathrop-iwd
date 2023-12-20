/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";
import styles from "styles/Home.module.css";

const DATE_DISTANCE_LABELS: Record<string, string> = {
  days: "dias",
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
};

const HomeHeader: React.FC = ({}) => {
  const [_dateDistance, _setDateDistance] = useState({
    distance: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  } as Record<string, number>);

  useEffect(() => {
    const _interval = setInterval(function () {
      const _result = calcDateDistance(
        changeTimeZone(configValues.eventDate, "America/Sao_Paulo")
      );

      if (_result.distance < 0) {
        clearInterval(_interval);
        return;
      }

      _setDateDistance(_result);
    }, 1000);

    return () => {
      clearInterval(_interval);
    };
  }, []);

  return (
    <>
      <div className={styles.MainInnerNoteBook}>
        <div className={styles.MainInnerFullContent}>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <img
                alt="header"
                className={styles.headerImg}
                src="/headerWtmMin.png"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                className={styles.RegisterButton}
                href={configValues.eventLinkRegistrationUrl}
              >
                Inscreva-se
              </a>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.MainInnerFull}>
        <div className={styles.MainInnerFullContent}>
          <Col className={styles.MainInnerFullDescription}>
            <Row style={{ textAlign: "center", paddingBottom: "20px" }}>
              <Col>
                <img src="/iwdLogo.svg" alt="logo iwd" />
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className={styles.localDateInfo}>
                <h1>{configValues.formattedDate}</h1>
                <h4>{configValues.place}</h4>
              </Col>
            </Row>
          </Col>
          <Row style={{ marginTop: "15px", textAlign: "center" }}>
            <Col>
              {" "}
              <a
                className={styles.RegisterButton}
                href={configValues.eventLinkRegistrationUrl}
              >
                Inscreva-se
              </a>{" "}
            </Col>
          </Row>
        </div>
      </div>

      <section>
        <div className={styles.MainDescriptionMinWrapper}>
          <div className={styles.MainDescriptionMin}>
            <Col className={styles.MainInnerFullDescriptionMin}>
              <h4>{configValues.formattedDate}</h4>
              <p>{configValues.place}</p>
            </Col>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <a
                  className={styles.RegisterButton}
                  href={configValues.eventLinkRegistrationUrl}
                >
                  Inscreva-se
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className={styles.Counter}>
        <div>
          <ul className={styles.CounterList}>
            {Object.keys(DATE_DISTANCE_LABELS).map((key) => (
              <li className={styles.CounterListItem} key={key}>
                <span className={styles.CounterListItem__time}>
                  {_dateDistance[key]}
                </span>
                {DATE_DISTANCE_LABELS[key]}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
