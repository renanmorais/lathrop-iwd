import React from 'react';
import speakers from '../hooks/useSpeakers';
import BaseLayout from '../layouts/base-layout';
import { Col, Row, Container } from 'reactstrap';
import styles from '../styles/Speakers.module.css'
import SpeakerCard from 'components/speakers-section/speaker-card';

const SpeakersPage = ({ }) => {
    const sectionStyle = {
        marginTop: '60px'
    }

    const _center = {
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <>
            <div style={{ margin: "60px 60px", height: '100vh' }}>
                <Container fluid>
                    <h1>Patrocinadores e Apoiadores</h1>

                    <p style={{ marginTop: '60px' }}>

                    </p>
                    <section style={sectionStyle}>
                        <Row style={_center}>


                        </Row>
                    </section>
                </Container>
                <Container fluid>
                    <Row style={{ ..._center, textAlign: 'center' }}>
                        <h4> Que tal colocar sua marca neste evento?</h4>
                        <p>
                            <a style={{ textDecoration: 'underline' }} href="https://docs.google.com/presentation/d/18L58cFLqdb2kV4rjxGnXthOSjwuHb_duosIOJNBehZ4">
                                Clique aqui e acesse nosso midia kit!
                            </a>
                        </p>
                        <p>
                            Fale conosco pelo e-mail:
                            <a href="mailto:gdg.uberlandia@gmail.com" target="_blank" rel="noreferrer">gdg.uberlandia@gmail.com</a>
                        </p>
                    </Row>
                </Container>
            </div>
        </>
    )
}

SpeakersPage.layout = BaseLayout;



export default SpeakersPage
