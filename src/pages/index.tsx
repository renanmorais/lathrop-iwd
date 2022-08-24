import React from 'react';
import HomeHeader from '../components/headers/home-header';
import BaseLayout from '../layouts/base-layout';
import SpeakersSection from '../components/speakers-section/speakers-section';
import OlderEvenstsSection from 'components/older-events-section/older-events-section';


// https://alvarotrigo.com/blog/css-animations-scroll/

const Home = ({ }) => {
  const sectionStyle = {
    marginTop: '60px'
  }

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

      </div>
    </>

  )
}

Home.layout = BaseLayout;



export default Home
