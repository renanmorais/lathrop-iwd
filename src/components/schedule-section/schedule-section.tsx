/*eslint-disable*/
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
  CarouselControl,
  Row
} from "reactstrap";
import ScheduleCard from "./schedule-card"
import ScheduleTime from "./schedule-time"
import { Speaker } from "models/speaker";

import styles from "../../styles/Schedule.module.css";
import { Schedule } from "models/schedule";


/*
    TODO: remove example...
const scheduleConst: {
    start: string;
    end: string;
    speeches: { 
        topic?:string; 
        speaker_id?: number;
    }[]
}[] = [
    {
        start: "08:00",
        end: "09:00",
        speeches: [{topic: "Credenciamento"}]
    },
    {
        start: "09:00",
        end: "09:30",
        speeches: [{topic: "Abertura do DevFest Cerrado"}]
    },
    {
        start: "09:30",
        end: "10:10",
        speeches: [{topic: "Keynote de Abertura", speaker_id: 12}]
    },
    {
        start: "11:00",
        end: "11:45",
        speeches: [{speaker_id: 7}, {speaker_id: 10}, {speaker_id: 1}]
    },
    {
        start: "12:00",
        end: "12:30",
        speeches: [{speaker_id: 11}]
    },
    {
        start: "12:30",
        end: "13:40",
        speeches: [{topic: "Almoço"}]
    },
    {
        start: "13:40",
        end: "14:25",
        speeches: [{speaker_id: 4}, {speaker_id: 6}, {speaker_id: 5}]
    },
    {
        start: "14:35",
        end: "15:15",
        speeches: [{speaker_id: 15}, {speaker_id: 2}, {speaker_id: 14}]
    },
    {
        start: "15:25",
        end: "16:05",
        speeches: [{speaker_id: 3},{speaker_id: 13},{speaker_id: 9},{speaker_id: 8}]
    },
    {
        start: "16:40",
        end: "17:30",
        speeches: [{topic: "Keynote de encerramento"}]
    },
    {
        start: "17:40",
        end: "18:00",
        speeches: [{topic: "Encerramento"}]
    },
]*/

interface SpeakersSectionProps {
    speakers: Array<Speaker>,
    schedule: Array<Schedule>
}
  
const ScheduleSection: React.FC<SpeakersSectionProps> = ({ speakers, schedule }) => {
    
  return (
    <>
      {speakers.length &&
      <Container>
        <div id="schedule">
          <h4>Agenda</h4>
        </div>
        {
            schedule.map((schedule, index)=> {
                return (
                <Row key={`schedule-${index}`} className={styles.row_content}>
                    <ScheduleTime initialTime={schedule.start} endTime={schedule.end} />
                    <Col xxl={11} sm={12}>
                        <Row className={styles.height100p}>
                        {
                            schedule.speeches.map((speech, index) => {
                                const speaker = speakers.find(speakerObj => speakerObj.id === speech.speaker_id);
                                console.log("speaker: " + JSON.stringify(speaker))
                                if(speech?.topic){
                                    return (
                                        <ScheduleCard key={`speech-${schedule.start}-${schedule.end}-${index}`} lgValue={12/schedule.speeches.length} {...speaker} topic={speech.topic} />
                                    )
                                } else {
                                    return (
                                        <ScheduleCard key={`speech-${schedule.start}-${schedule.end}-${index}`} lgValue={12/schedule.speeches.length} {...speaker} />
                                    )
                                }
                                
                            }) 
                        }
                        </Row>
                    </Col>
                </Row>)
            })
        }
      </Container>
    }   
    </>
  );
};

export default ScheduleSection;
