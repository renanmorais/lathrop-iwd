import React from "react";
import styles from "styles/Marquee.module.css";

export const items = [
  "Ouse ser feliz",
  "Ouse ser única",
  "Ouse ser diferente",
  "Ouse ser você mesma",
  "Ouse ser sonhadora",
  "Ouse ser independente",
  "Ouse ser resiliente",
  "Ouse ser destemida",
];

export const marqueeItems = [...items, ...items];

export const marqueeItemsReverse = Array(16).fill("Impact the Future");

const Marquee = ({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <section>
    <div className={styles.MarqueeOuter}>
      <div
        className={reverse ? styles.MarqueeInnerReverse : styles.MarqueeInner}
      >
        <div className={styles.ConstructItems}>
          {items.map((item, index) => (
            <div key={index} className={styles.ConstructItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Marquee;
