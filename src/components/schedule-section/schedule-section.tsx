/*eslint-disable*/
import React from "react";
import { Col, Container, Row } from "reactstrap";
import _speakers from "../../hooks/useSpeakers";
import _schedule from "../../hooks/useSchedule";
import ScheduleCard from "./schedule-card";
import ScheduleTime from "./schedule-time";
import { Speaker } from "models/speaker";
import { Schedule } from "models/schedule";
import styles from "../../styles/Schedule.module.css";

interface SpeakersSectionProps {
  speakers: Array<Speaker>;
  schedule: Array<Schedule>;
}

const ScheduleSection: React.FC<SpeakersSectionProps> = ({}) => {
  const speakers: Array<Speaker> = _speakers;
  const schedule: Array<Schedule> = _schedule;

  return (
    <>
      {speakers.length && (
        <Container>
          <div id="schedule">
            <h1 className={styles.Title}>Agenda</h1>
          </div>
          {schedule.map((schedule, index) => {
            return (
              <Row key={`schedule-${index}`} className={styles.rowContent}>
                <ScheduleTime
                  initialTime={schedule.start}
                  endTime={schedule.end}
                />
                <Col xxl={11} sm={12}>
                  <Row className={styles.height}>
                    {schedule.speeches?.map((speech, index) => {
                      const speaker = speakers.find(
                        (speakerObj) => speakerObj.id === speech.speaker_id
                      );
                      if (speech?.topic) {
                        return (
                          <ScheduleCard
                            key={`speech-${schedule.start}-${schedule.end}-${index}`}
                            lgValue={12 / schedule.speeches.length}
                            {...speaker}
                            topic={speech.topic}
                            speakers={speech.speakers}
                            room={speech.room}
                          />
                        );
                      } else {
                        return (
                          <ScheduleCard
                            key={`speech-${schedule.start}-${schedule.end}-${index}`}
                            lgValue={12 / schedule.speeches.length}
                            {...speaker}
                          />
                        );
                      }
                    })}
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Container>
      )}

      <Container>
        <h1 className={styles.Title}>Álbum de fotos</h1>
        <a href="https://photos.app.goo.gl/SePZEJQSdYiFuqui8" target="_blank">
          <img
            src="albumIWD.jpeg"
            alt="Álbum de fotos"
            width="100%"
            loading="lazy"
          />
        </a>
      </Container>
    </>
  );
};

export default ScheduleSection;
