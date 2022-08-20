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
            <Container>
                <Row>
                    <Col>
                        <h1> O que é o Devfest? </h1>

                        <p className={styles.Description}>

                            O DevFest é um evento organizado por comunidades do Google Developers Group (GDG), para a troca de conhecimento e fomento tecnológico das regiões. A conferência é preparada para profissionais, estudiosos, pessoas desenvolvedoras e demais pessoas com interesse em aprendizado, ambiente de troca de experiências e networking.
                        </p>
                    </Col>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8VbKty9jtdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>

            </Container>
            <Row>
                <div className={styles.ConstructItems}>
                    <div className={styles.ConstructItem}>Construa seu app em Flutter</div>
                    <div className={styles.ConstructItem}>Construa seu app em Angular</div>
                    <div className={styles.ConstructItem}>Fez o deploy usando Google Cloud?</div>
                    <div className={styles.ConstructItem}>Já utilizou Tensor Flow?</div>
                    <div className={styles.ConstructItem}>Construa seu app em Android</div>
                    <div className={styles.ConstructItem}>Já criou sua action para o Google Assistant?</div>
                </div>
            </Row>
        </>
    );
}

export default OlderEvenstsSection;

