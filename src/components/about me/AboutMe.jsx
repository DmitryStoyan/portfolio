import React from "react";
import styles from "./aboutMe.module.css";
import mePhoto from "../../images/mePhoto.png";

export function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.aboutMe__title}>( About me )</h2>
      <div className={styles.aboutMe__wrapper}>
        <div className={styles.aboutMe__meWrapper}>
          <img src={mePhoto} alt="" />
          <span className={styles.aboutMe__message}>Yes, that's me.</span>
        </div>
        <div className={styles.aboutMe__subtitleWrapper}>
          <p className={styles.aboutMe__subtitle}>
            Some kind of product description, which we will come up with
            ourselves. In the meantime, here will be the text of the fish.
          </p>
          <p className={styles.aboutMe__subtitle}>
            When we create a project, it will be necessary to briefly describe
            the essence of the project. At the same time, we will need to leave
            the meaning for the Overview block.
          </p>
        </div>
      </div>
    </section>
  );
}
