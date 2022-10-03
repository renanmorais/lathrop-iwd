/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import _sponsors from '../../hooks/useSponsors';
import _supports from '../../hooks/userSupports';


import styles from '../../styles/Sponsors.module.css'
import SponsorCard from "./sponsor-card";
import { SponsorLevel } from "models/sponsor-level";

interface StringMap { [key: string]: any; }

const SponsorsSection: React.FC = ({ }) => {

    const sponsors: StringMap = _sponsors;
    const supports: StringMap = _supports;

    useEffect(() => {
    }, []);


    const mapSponsorCard = (sponsor: Sponsor) => {
        if (sponsor.logo)
            return (<Col><SponsorCard {...sponsor}></SponsorCard></Col>)
        return <Col></Col>
    }


    const mapSponsorLevel = (sponsorLevel: SponsorLevel) => {
        if (sponsorLevel.items.length > 0)
            return (<div>
                <h4>
                    {sponsorLevel.name}
                </h4>
                <Row>
                    <div className={styles.SponsorWrapper}>
                        {
                            sponsorLevel.items.map(mapSponsorCard)
                        }
                    </div>
                </Row>
            </div>)
        return <></>
    }


    return (
        <>
            <Container style={{ marginBottom: '60px' }}>
                <div id="sponsors">
                    {/*<h1>Patrocínio</h1>
                    <p style={{ margin: '30px 0px' }}>
                        Estas são as empresas que nos ajudaram a fazer este evento acontecer!
                    </p>*/}

                    <h4>
                        Patrocinador oficial
                    </h4>

                    {Object.keys(sponsors).map((el) => mapSponsorLevel(sponsors[el]))}

                    <h4>
                        Organização
                    </h4>

                    <div>
                        <Row>

                            <div className={styles.SponsorWrapper}>
                                {
                                    supports.items.map(mapSponsorCard)
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

