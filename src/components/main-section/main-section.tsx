/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee, { marqueeItems, marqueeItemsReverse } from "components/marquee";
import styles from "styles/Main.module.css";

const MainSection: React.FC = ({}) => {
  return (
    <main>
      <div id="about" className={styles.Container}>
        <div className={styles.TextContainer}>
          <h1 className={styles.Title}> O que é IWD?</h1>
          <p className={styles.Description}>
            O IWD é um evento anual realizado pelas WTMs de todo o mundo em
            homenagem ao Dia Internacional da Mulher. O programa Women
            Techmakers reuniu mais de 200 eventos globais, em 52 países, para
            trazer visibilidade, comunidade e recursos para as mulheres em
            tecnologia. Teremos 100% de palestrantes mulheres (cis e trans).
            Alguns dos assuntos que serão abordados são: Carreira na TI, Ciência
            de Dados, Mulheres na Computação, UX, Desenvolvimento Pessoal,
            Back-End, Front-End, Inteligência Artificial, Machine Learning, APIs
            do Google, Segurança da Informação (LGPD).
          </p>
        </div>
      </div>

      <section>
        <Marquee items={marqueeItems} />
        <Marquee items={marqueeItemsReverse} reverse />
      </section>
    </main>
  );
};

export default MainSection;
