import React from "react";
import { Row, Container } from "reactstrap";
import _sponsors from "../hooks/useSponsors";
import BaseLayout from "../layouts/base-layout";
import { getSponsors } from "front-features/sponsors";
import { SponsorLevel } from "models/sponsor-level";
import SponsorCard from "components/sponsors-section/sponsor-card";
import styles from "../styles/Sponsors.module.css";

interface SponsorsPageProps {
  sponsors: Array<SponsorLevel>;
}

const SponsorsPage = ({}: SponsorsPageProps) => {
  const sponsors: Array<SponsorLevel> = Object.values(_sponsors).map(
    (sponsor) => ({
      ...sponsor,
      items: sponsor.items.map((item) => ({
        ...item,
        url: item.url || "",
      })),
    })
  );

  const constructSponsorCol = (_sponsor: SponsorLevel) => {
    const sponsorCards = _sponsor.items.map((item, index) => (
      <SponsorCard
        {...sponsors}
        key={index}
        name={item.name}
        url={item.url}
        logo={item.logo}
      />
    ));

    return <>{sponsorCards}</>;
  };

  return (
    <Container>
      <div id="sponsors" className={styles.pageDiv}>
        <h1>Patrocinadores e apoiadores</h1>
        <section className={styles.SponsorsSection}>
          {sponsors.map((sponsor) => constructSponsorCol(sponsor))}
        </section>
        <Row className={styles.pageRow}>
          <h4>Que tal colocar sua marca neste evento?</h4>
          <p className={styles.pageParagraph}>
            <a href="https://docs.google.com/">
              Clique aqui e acesse nosso mídia kit
            </a>
          </p>
          <p className={styles.pageParagraph}>
            Fale conosco pelo e-mail:{" "}
            <a
              href="mailto:gdggoiania@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              gdggoiania@gmail.com
            </a>
          </p>
        </Row>
      </div>
    </Container>
  );
};

export async function getServerSideProps() {
  try {
    return {
      props: {
        sponsors: await getSponsors(),
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { sponsors: [] } };
  }
}

SponsorsPage.layout = BaseLayout;

export default SponsorsPage;
