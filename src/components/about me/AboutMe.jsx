import React from "react";
import styles from "./aboutMe.module.css";
import mePhoto from "../../images/hero-img2.png";

export function AboutMe() {
  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <h2 className={styles.aboutMe__title}>( About me )</h2>
      <div className={styles.aboutMe__wrapper}>
        <div className={styles.aboutMe__meWrapper}>
          <img className={styles.aboutMe__image} src={mePhoto} alt="" />
          <span className={styles.aboutMe__message}>Да, это я</span>
        </div>
        <div className={styles.aboutMe__subtitleWrapper}>
          <p className={styles.aboutMe__subtitle}>
            Привет! Я — фронтенд-разработчик с опытом работы в Vue и React.
            Создавал телеграм-ботов на Node.js, знаком с PWA и инструментами
            тестирования Cypress и Jest. Использую Webpack для сборки проектов.
            Стремлюсь к созданию современных и эффективных веб-приложений.
          </p>
          <p className={styles.aboutMe__subtitle}>
            Еще в музыкальной школе я понял как сложно учить сольфеджио, и
            перешел в программирование. Иногда хочу обратно на сольфеджио...
          </p>
        </div>
      </div>
    </section>
  );
}
