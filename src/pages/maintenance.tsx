/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "styles/Maintenance.module.css";

const Maintenance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maintenanceDiv}>
        <img src="/impactTheFuture.gif" alt="impact the future" />
        <h1 className={styles.h1}>Em manutenção</h1>
        <p className={styles.p}>
          Estamos trabalhando para melhorar o site. Por favor, volte mais tarde.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
