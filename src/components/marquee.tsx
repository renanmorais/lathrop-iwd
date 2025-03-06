import React from "react";
import styles from "styles/Marquee.module.css";

export const marqueeItems = Array(20).fill("Redefine Possible");
export const marqueeItemsBr = Array(20).fill("Redefine Possible");

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
