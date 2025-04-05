/* eslint-disable @next/next/no-img-element */
import { Col } from "reactstrap";
import _sponsors from "../../hooks/useSponsors";
import _supports from "../../hooks/userSupports";
import { Sponsor } from "models/sponsor";
import { SponsorLevel } from "models/sponsor-level";
import SponsorCard from "./sponsor-card";
import styles from "../../styles/Sponsors.module.css";

interface StringMap {
  [key: string]: any;
}

const SPONSORS_LIST: string[] = [
  "superior",
  "diamond",
  "golden",
  "silver",
  "bronze",
  "ruby",
  "ametista",
  "support",
  "companies",
  "partners",
];

interface SponsorsSectionProps {
  sponsors: { [key: string]: SponsorLevel };
}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  const supports: StringMap = _supports;
  const sponsors: StringMap = _sponsors;

  const mapSponsorCard = (sponsor: Sponsor, isStaff: boolean) => {
    if (sponsor.logo)
      return (
        <div key={sponsor.name}>
          <SponsorCard {...sponsor}></SponsorCard>
        </div>
      );
    return <Col></Col>;
  };

  const mapSponsorLevel = (sponsorLevel: SponsorLevel) => {
    if (sponsorLevel?.items?.length > 0)
      return (
        <div className={styles.SponsorContainer} key={sponsorLevel.name}>
          <h3>{sponsorLevel.name}</h3>
          <div className={styles.SponsorWrapper}>
            {sponsorLevel.items.map((item, index) => (
              <div key={`${sponsorLevel.name}-${index}`}>
                {mapSponsorCard(item, false)}
              </div>
            ))}
          </div>
        </div>
      );
    return <></>;
  };

  return (
    <div className={styles.Container}>
      <div id="sponsors">
        <h1 className={styles.Title}>Patrocinadores</h1>
        <p className={styles.Paragraph}>
          Estas são as empresas que nos ajudaram a fazer este evento acontecer!
        </p>

        {SPONSORS_LIST.map((el, index) => (
          <div key={`sponsor-level-${index}`}>
            {mapSponsorLevel(sponsors[el])}
          </div>
        ))}

        <h1 className={styles.Title}>Organização</h1>

        <div
          className={`${styles.SponsorWrapper} ${styles.SponsorWrapperStyle}`}
        >
          {supports.items.map((item: Sponsor, index: number) => (
            <div key={`support-item-${index}`}>
              {mapSponsorCard(item, false)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
