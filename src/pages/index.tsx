import type { NextLayoutPage } from 'next'
import React from 'react';
import HomeHeader from '../components/headers/home-header';
import BaseLayout from '../layouts/base-layout';
import SpeakersSection from '../components/speakers-section/speakers-section';

const Home: NextLayoutPage = ({ }) => {
  return (
    <>
      <main>
        <HomeHeader></HomeHeader>
      </main>
      <section>
        <SpeakersSection />
      </section>
    </>

  )
}

Home.layout = BaseLayout;



export default Home
