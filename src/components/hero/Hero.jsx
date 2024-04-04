import React from "react";
import styles from "./hero.module.css";

export const Hero = () => (
  <section className={styles.hero}>
    <div className={`${styles.hero__wrapper} ${styles.hero__wrapperInfo}`}>
      <span className={styles.hero__messageTitle}>Hello, I'm</span>
      <h2 className={styles.hero__title}>Dmitry</h2>
      <h2 className={styles.hero__title}>Stoyan</h2>
    </div>
    <div
      className={`${styles.hero__wrapper} ${styles.hero__wrapperDescription}`}
    >
      <p className={styles.hero__subtitle}>web developer</p>
      <p className={styles.hero__description}>
        Projects at the intersection of logic, meaning,marketing, design and
        layout.Logical and effective
      </p>
    </div>
  </section>
);
