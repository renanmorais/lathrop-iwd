import React, { useEffect } from 'react';
import HomeHeader from '../components/headers/home-header';
import BaseLayout from '../layouts/base-layout';
import SpeakersSection from '../components/speakers-section/speakers-section';
import OlderEvenstsSection from 'components/older-events-section/older-events-section';
import SponsorsSection from 'components/sponsors-section/sponsor-section';


// https://alvarotrigo.com/blog/css-animations-scroll/

const Home = ({ }) => {
  const sectionStyle = {
    marginTop: '60px'
  }

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
  }

  useEffect(() => {
    window.addEventListener("scroll", reveal);
  })

  return (
    <>
      <div>
        <HomeHeader></HomeHeader>

        <section style={sectionStyle}>
          <OlderEvenstsSection />
        </section>
        <section style={sectionStyle}>
          <SpeakersSection />
        </section>
        <section style={sectionStyle}>
          <SponsorsSection />
        </section>

      </div>
    </>

  )
}

Home.layout = BaseLayout;



export default Home
