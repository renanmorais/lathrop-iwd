/*eslint-disable*/
import { Sponsor } from "models/sponsor";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import _supports from '../../hooks/userSupports';


import styles from '../../styles/Sponsors.module.css'
import SponsorCard from "./sponsor-card";
import { SponsorLevel } from "models/sponsor-level";

import { ENDPOINT } from "../../helpers/config";

interface StringMap { [key: string]: any; }

const SPONSORS_LIST =  ["superior", "diamond", "golden", "silver", "bronze", "ruby", "ametista", "support", "staff"];

const SponsorsSection: React.FC = ({ }) => {

    const [sponsors, setSponsors] = useState<StringMap>({});
    const supports: StringMap = _supports;

    useEffect(() => {
        fetch(ENDPOINT + '/api/v1/sponsors')
          .then((res) => res.json())
          .then((data) => {
            setSponsors(data)
          })
    }, []);

    const mapSponsorCard = (sponsor: Sponsor, isStaff: boolean) => {
        if (sponsor.logo)
            return (<Col key={sponsor.id}><SponsorCard {...sponsor} isStaff></SponsorCard></Col>)
        return <Col></Col>
    }

    const mapSponsorLevel = (sponsorLevel: SponsorLevel, isStaff: boolean) => {
        if (sponsorLevel?.items?.length > 0)
            return (<div>
                <h4>
                    {sponsorLevel.name}
                </h4>
                <Row>
                    <div className={isStaff? styles.StaffWrapper: styles.SponsorWrapper}>
                        {
                            sponsorLevel.items.map((item) => mapSponsorCard(item, isStaff))
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

                    {SPONSORS_LIST.map((el) => mapSponsorLevel(sponsors[el], el === "staff"))}

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

