import React from "react";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import _speakers from "../../hooks/useSpeakers";
import { Speaker } from "models/speaker";
import styles from "../../styles/Schedule.module.css";

const speakers: Array<Speaker> = _speakers;

interface ScheduleCardProps extends Speaker {
  lgValue: number;
  room?: string;
  speakers?: {
    topic?: string;
    speaker_id?: number;
    start: string;
    end: string;
  }[];
}

const pathHtml = (name: string, pathStyle: string) => {
  return (
    <div className={`${styles.pathDiv} ${pathStyle}`}>
      <span>{name}</span>
    </div>
  );
};

const renderPath = (path?: string) => {
  switch (path) {
    case "Katherine Johnson":
      return pathHtml("Katherine Johnson", styles.trilha1);
    case "Cora Coralina":
      return pathHtml("Cora Coralina", styles.trilha2);
    default:
      return pathHtml("Marília Mendonça", styles.trilha3);
  }
};

const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
  return (
    <>
      {props.speakers && (
        <Col xxl={props.lgValue} className={styles.principalCol}>
          <div className={styles.cardContent}>
            <div className={styles.pathWrapper} style={{}}>
              {props.room && renderPath(props.room)}
            </div>

            {props.speakers.map((spk, index) => {
              const speak = speakers.find((obj) => obj.id === spk.speaker_id);
              return (
                <>
                  <div className={styles.cardTime} style={{}}>
                    <div>
                      <span>{spk.start}</span>
                      <span className={`${styles.timeSeparator}`}>-</span>
                      <span className={styles.opacity}>{spk.end}</span>
                    </div>
                  </div>

                  {speak && speak.photo && (
                    <div>
                      <div className={styles.divWrapper}>
                        <Image
                          unoptimized
                          src={speak.photo}
                          alt={`Foto de ${speak.name}`}
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                        <div className={styles.cardSpeakerInfoContent}>
                          <p>{speak.name}</p>
                          <p>{speak.title}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={styles.cardTitle}>
                    <div>
                      <span>{spk.topic}</span>
                    </div>
                  </div>

                  {speak ? <p>{speak.topic}</p> : <></>}

                  {props.speakers && props.speakers.length > 1 && index == 0 ? (
                    <hr></hr>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </Col>
      )}

      {!props.speakers && (
        <Col xxl={props.lgValue} className={styles.principalCol}>
          <Row className={styles.cardContent}>
            <div className={styles.pathWrapper}>
              {props.path && renderPath(props.path)}
            </div>
            <Row className={styles.cardTitle}>
              <div>
                <span>{props.topic}</span>
              </div>
            </Row>
            {props.photo && (
              <Row>
                <div className={styles.divWrapper}>
                  <Image
                    unoptimized
                    src={props.photo}
                    alt={`Foto de ${props.name}`}
                    height="40"
                    width="40"
                    loading="lazy"
                  />
                  <div className={styles.cardSpeakerInfoContent}>
                    <h5>{props.name}</h5>
                    <p>{props.companyTitle}</p>
                  </div>
                </div>
              </Row>
            )}
          </Row>
        </Col>
      )}
    </>
  );
};

export default ScheduleCard;
