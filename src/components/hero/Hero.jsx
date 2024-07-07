import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  const [descriptionText, setDescriptionText] = useState(
    "Дайте мне Visual Studio Code и Я rotate этот мир на (360deg)."
  );
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleMouseEnter = () => {
    setDescriptionText("Дайте мне tasks, и Я will create чудо.");
  };

  const handleMouseLeave = () => {
    setDescriptionText(
      "Дайте мне Visual Studio Code и Я rotate этот мир на (360deg)."
    );
  };

  useEffect(() => {
    setShowSubtitle(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.hero__wrapper} ${styles.hero__wrapperInfo}`}>
        <span className={styles.hero__messageTitle}>Hello, I'm</span>
        <div
          className={`${styles.titleWrapper} ${
            showSubtitle ? styles.animateSubtitle : ""
          }`}
        >
          <h2 className={styles.hero__title}>Dmitry</h2>
          <h2 className={styles.hero__title}>Stoyan</h2>
        </div>
      </div>
      <div
        className={`${styles.hero__wrapper} ${styles.hero__wrapperDescription}`}
      >
        <p
          className={`${styles.hero__subtitle} ${
            showSubtitle ? styles.animateSubtitle : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          web developer
        </p>
        <p className={styles.hero__description}>{descriptionText}</p>
      </div>
    </section>
  );
};
