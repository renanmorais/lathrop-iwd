import type { NextLayoutPage } from 'next'
import React from 'react';
import BaseLayout from '../layouts/base-layout';
import styles from '../styles/Home.module.css'

const Home: NextLayoutPage = ({ }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                Uai parece que deu certoaa
            </main>
        </div>

    )
}

Home.layout = BaseLayout;



export default Home
