import React, { useEffect, useState } from "react";
import Marquee, { marqueeItems, marqueeItemsBr } from "components/marquee";
import styles from "styles/Main.module.css";

const MainSection: React.FC = ({}) => {
  const [isFirstText, setIsFirstText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFirstText((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <section>
        {/* <Marquee items={marqueeItems} /> */}
        <div className={styles.shining}>
          <h1 className={styles.shiningText}>
            {isFirstText ? "<>Redefine Possible</>" : "<>Redefine Possible</>"}
          </h1>
        </div>
      </section>
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
        {/* <Marquee items={marqueeItems} /> */}
        <div className={styles.shining}>
          <h1 className={styles.shiningText}>
            {isFirstText ? "<>Redefine Possible</>" : "<>Redefine Possible</>"}
          </h1>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
