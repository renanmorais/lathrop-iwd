import type { NextLayoutPage } from 'next'
import React from 'react';
import HomeHeader from '../components/headers/home-header';
import BaseLayout from '../layouts/base-layout';
import styles from '..//styles/Home.module.css'

const Home: NextLayoutPage = ({ }) => {
  return (
    <>
      <main>
        <HomeHeader></HomeHeader>
      </main>

    </>

  )
}

Home.layout = BaseLayout;



export default Home
