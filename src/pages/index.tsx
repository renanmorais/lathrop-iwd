import React, { useEffect } from "react";
import HomeHeader from "../components/headers/home-header";
import BaseLayout from "../layouts/base-layout";
import MainSection from "components/main-section/main-section";
import SpeakersSection from "../components/speakers-section/speakers-section";
import ScheduleSection from "components/schedule-section/schedule-section";
import LocationSection from "components/location-section/location-section";
import TicketsSection from "components/tickets-section/tickets-section";
import SponsorsSection from "components/sponsors-section/sponsors-section";
import { Speaker } from "models/speaker";
import { Schedule } from "models/schedule";
import { getSpeakers } from "front-features/speakers";
import { getSchedule } from "front-features/schedule";
import { getSponsors } from "front-features/sponsors";
import { SponsorLevel } from "models/sponsor-level";

// https://alvarotrigo.com/blog/css-animations-scroll/

interface HomePageProps {
  speakers: Array<Speaker>;
  sponsors: { [key: string]: SponsorLevel };
  schedule: Array<Schedule>;
}

const Home = ({ speakers, sponsors, schedule }: HomePageProps) => {
  const sectionStyle = {
    marginTop: "60px",
  };

  const reveal = () => {
    var reveals = document.querySelectorAll("section");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
  });

  return (
    <>
      <div>
        <HomeHeader></HomeHeader>
        <section>
          <MainSection />
        </section>
        <section style={sectionStyle}>
          <SpeakersSection speakers={speakers} />
        </section>
        {/* <section style={sectionStyle}>
          <ScheduleSection speakers={speakers} schedule={schedule} />
        </section> */}
        <section style={sectionStyle}>
          <TicketsSection />
        </section>
        {/* <section style={sectionStyle}>
          <LocationSection />
        </section>
        <section style={sectionStyle}>
          <SponsorsSection sponsors={sponsors} />
        </section> */}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    return {
      props: {
        speakers: await getSpeakers(),
        sponsors: await getSponsors(),
        schedule: await getSchedule(),
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { speakers: [], sponsors: [] } };
  }
}

Home.layout = BaseLayout;

export default Home;
