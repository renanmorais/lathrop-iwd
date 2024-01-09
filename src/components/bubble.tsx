import React from "react";
import styles from "styles/Bubble.module.css";

const Bubble = ({ text }: { text: string }) => {
  return (
    <div className={styles.Div}>
      <BubbleText text={text} />
    </div>
  );
};

const BubbleText = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.Text}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Bubble;
