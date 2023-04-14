/*eslint-disable*/
import {Speaker} from "models/speaker";
import Image from "next/image";
import React, {useState} from "react";
import {
    Badge,
    Col,
    Row
} from "reactstrap";

import styles from "../../styles/Schedule.module.css";
import _speakers from "../../hooks/useSpeakers";
import ScheduleTime from "./schedule-time";

const speakers: Array<Speaker> = _speakers;

interface ScheduleCardProps extends Speaker {
    lgValue: number;
    speakers?: {
        topic?: string;
        speaker_id?: number;
        start: string;
        end: string;
    }[]
}

const pathHtml = (name: string, path: string, pathStyle: string) => {
    return <div className={`${styles.path_div} ${pathStyle}`}>
        <Image
            unoptimized
            className={styles.card_path_icon}
            src={path}
            height="15px"
            width="15px"
        />
        <span className={styles.margin_left_10}>{name}</span>
    </div>
}
const renderPath = (path: string) => {
    switch (path) {
        case "Arara Canindé":
            return pathHtml("Arara Canindé", `/${path}.png`, styles.path_canastra_color);
        case "Araracanga":
            return pathHtml("Araracanga", `/${path}.png`, styles.path_minas_color);
        case "Araraúna":
            return pathHtml("Araraúna", `/${path}.png`, styles.path_brain_color);
        default:
            return pathHtml("Maracanã", `/${path}.png`, styles.path_curado_color);
    }
}


const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
    const getPillColor = (tech: string) => {
        switch (tech) {
            case "Carreira":
                return "primary"
            case "Machine Learning":
                return "secondary"
            case "Web":
                return "danger"
            case "UI/UX":
                return "info"
            case "Infra/Devops":
                return "warning"
            default:
                return "success"
        }
    }

    const getBoderColor = (tech: string) => {
        switch (tech) {
            case "Arara Canindé":
                return "#46B3DC"
            case "Araracanga":
                return "#09CCB1"
            case "Araraúna":
                return "#46B3DC"
            case "Maracanã":
                return "#3392F9"
            default:
                return "#FFFFFF"
        }
    }
    return (
        <>
            {props.speakers && (
                <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
                    <Row className={styles.card_content}>
                        {
                            props.speakers.map((spk, index) => {
                                const speak = speakers.find(obj => obj.id === spk.speaker_id);
                                console.log("speaker: " + JSON.stringify(speak))
                                return (
                                    <>
                                        <Row className={styles.card_title}>
                                            <div>
                                                <span className={styles.margin_right_15}>{spk.topic}</span>
                                            </div>
                                        </Row>
                                        <Row className={styles.card_time}>
                                            <span>{spk.start}</span>
                                            <span className={`${styles.timeSeparator} d-xxl-none d-sm-block`}>-</span>
                                            <span className={styles.opacity50}>{spk.end}</span>
                                        </Row>
                                        {speak && speak.photo && (
                                            <Row className={styles.display_inline_block}>
                                                <div className={styles.div_wrapper}>
                                                    <Image
                                                        unoptimized
                                                        className={styles.card_image}
                                                        src={speak.photo}
                                                        alt={`Foto ${speak.name}`}
                                                        height="40px"
                                                        width="40px"
                                                    />
                                                    <div className={styles.card_speaker_info_content}>
                                                        <h5>{speak.name}</h5>
                                                        {speak.community &&
                                                            <p className={styles.gde}>{speak.community}</p>}
                                                        <p className={styles.font_size_14}>{`${speak.companyTitle}`}</p>
                                                        <div className={styles.path_wrapper}>
                                                            {
                                                                speak.path && renderPath(speak.path)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        )}
                                        <hr style={{width: '100%'}}></hr>
                                    </>
                                    )
                                    })
                                    }
                                    </Row>
                            </Col>
                            )
                            }
                        {!props.speakers && (
                            <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
                        <Row className={styles.card_content}>
                            <Row className={styles.card_title}>
                                <div>
                                    <span className={styles.margin_right_15}>{props.topic}</span>
                                </div>
                            </Row>
                            {props.photo && (
                                <Row className={styles.display_inline_block}>
                                    <div className={styles.div_wrapper}>
                                        <Image
                                            unoptimized
                                            className={styles.card_image}
                                            src={props.photo}
                                            alt={`Foto ${props.name}`}
                                            height="40px"
                                            width="40px"
                                        />
                                        <div className={styles.card_speaker_info_content}>
                                            <h5>{props.name}</h5>
                                            {props.community && <p className={styles.gde}>{props.community}</p>}
                                            <p className={styles.font_size_14}>{`${props.companyTitle}`}</p>
                                            <div className={styles.path_wrapper}>
                                                {
                                                    props.path && renderPath(props.path)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            )}
                        </Row>
                </Col>
            )}
                </>)
            };

            export default ScheduleCard;
