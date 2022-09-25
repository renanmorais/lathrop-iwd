/*eslint-disable*/
import React, { useState } from "react";
import {
    Col,
    Container,
    Row,
} from "reactstrap";

import Image from 'next/image';
import styles from 'styles/OlderEvents.module.css';

const OlderEvenstsSection: React.FC = ({ }) => {

    return (
        <>
            <Container id="about">
                <Row>
                    <Col lg={6} sm={12}>
                        <h1> O que é o Devfest? </h1>

                        <p className={styles.Description}>

                            O DevFest é um evento organizado por comunidades do Google Developers Group (GDG), para a troca de conhecimento e fomento tecnológico das regiões. A conferência é preparada para profissionais, estudiosos, pessoas desenvolvedoras e demais pessoas com interesse em aprendizado, ambiente de troca de experiências e networking.
                        </p>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className={styles.VideoContainer}><iframe src='https://www.youtube.com/embed/8VbKty9jtdM' allowFullScreen></iframe></div>

                    </Col>
                </Row>

            </Container>

            <div className={styles.MarqueeOuter}>
                <div className={styles.MarqueeInner}>
                    <div className={styles.ConstructItems}>
                        <div className={styles.ConstructItem}>Construa seu app em Flutter</div>
                        <div className={styles.ConstructItem}>Construa seu app em Angular</div>
                        <div className={styles.ConstructItem}>Fez o deploy usando Google Cloud?</div>
                        <div className={styles.ConstructItem}>Já utilizou Tensor Flow?</div>
                        <div className={styles.ConstructItem}>Construa seu app em Android</div>
                        <div className={styles.ConstructItem}>Já criou sua action para o Google Assistant?</div>
                        <div className={styles.ConstructItem}>Integrou as APIs do Maps?</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OlderEvenstsSection;

