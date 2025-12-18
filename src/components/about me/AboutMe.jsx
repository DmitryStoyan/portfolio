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
            Я frontend-разработчик с практическим опытом разработки современных web-приложений на Vue.js. 
            Работал с клиентской архитектурой SPA, писал телеграм-ботов на Node.js, использовал TypeScript, 
            PWA-подходы и инструменты тестирования (Jest, Cypress). 
            В качестве сборщика применяю Vite, уделяю внимание производительности и поддерживаемости кода.
          </p>
          <p className={styles.aboutMe__subtitle}>
            В работе ориентируюсь на продуктовый результат, чистую реализацию и удобство конечного пользователя.
          </p>
        </div>
      </div>
    </section>
  );
}
