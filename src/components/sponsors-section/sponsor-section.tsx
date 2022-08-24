/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import sponsors from '../../hooks/useSponsors';


import styles from '../../styles/Sponsors.module.css'
import SponsorCard from "./sponsor-card";

const SponsorsSection: React.FC = ({ }) => {

    useEffect(() => {
    }, []);


    const mapSponsorCard = (sponsor: Sponsor) => {
        if (sponsor.logo)
            return (<Col><SponsorCard {...sponsor}></SponsorCard></Col>)
        return <Col></Col>
    }


    return (
        <>
            <Container style={{ marginBottom: '60px' }}>
                <div id="sponsors">
                    <h1>Patrocínio</h1>
                    <p style={{ margin: '30px 0px' }}>
                        Estas são as empresas que nos ajudaram a fazer este evento acontecer!
                    </p>

                    <h4>
                        Diamante
                    </h4>

                    <div>

                        <Row>

                            <div className={styles.SponsorWrapper}>
                                {
                                    sponsors['diamond'].items.map(mapSponsorCard)
                                }
                            </div>
                        </Row>
                    </div>

                    <h4>
                        Apoio
                    </h4>

                    <div>
                        <Row>

                            <div className={styles.SponsorWrapper}>
                                {
                                    sponsors['support'].items.map(mapSponsorCard)
                                }
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default SponsorsSection;

