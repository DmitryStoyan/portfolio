import React, { useState } from "react";
import styles from "./projects.module.css";
import { Project } from "../project/Project";
import randomGame from "../../images/randomGame.png";
import aionDestiny from "../../images/AionDestiny.png";
// import anonChat from "../../images/bot.png";
import anonChat from "../../images/anonChatImg.jpg";

export function Projects() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Aion Destiny",
      imgSrc: aionDestiny,
      imgAlt: "Aion Destiny",
      link: "https://aiondestiny.net/",
      storyTitle: "Aion Desteny",
      storySubtitle:
        "Сайт игрового сервера Aion. Имеет регистрацию, личный кабинет, локализацию сайта на разных языках.",
      storyStackSubtitle: "HTML, CSS, PHP, JavaScript",
      fullWidth: false,
    },
    {
      id: 2,
      title: "Анонимный чат бот ТГ",
      imgSrc: anonChat,
      imgAlt: "Анонимный чат",
      link: "https://t.me/anonimnieZnakomstva1_bot",
      storyTitle: "Telegram бот 'Анонимные знакомства'",
      storySubtitle:
        "Телеграм-бот, созданный для тех, кто хочет общаться с случайными собеседниками анонимно. Бот позволяет вам встретить интересных людей из разных уголков мира прямо из вашего Телеграма.",
      storyStackSubtitle: "Node.js, Библиотека Telegraf, БД MongoDB",
      fullWidth: false,
    },
    {
      id: 3,
      title: "Random Game",
      imgSrc: randomGame,
      imgAlt: "randomGame",
      link: "https://game-random-puce.vercel.app/",
      storyTitle: "Random Game",
      storySubtitle:
        "Random Game — это прогрессивное веб-приложение, созданное для тех, кто испытывает трудности с выбором игры из своей обширной коллекции. Это приложение в стиле рулетки добавляет элемент неожиданности и справедливости в процесс выбора игры, делая его веселым и легким.",
      storyStackSubtitle: "PWA, HTML, CSS, JavaScript",
      fullWidth: true,
    },
  ]);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projects__title}>( Projects )</h2>
      <div className={styles.projects__wrapper}>
        {cards.map((item) => (
          <Project
            item={item}
            key={item.id}
            className={item.fullWidth ? styles.fullWidth : ""}
          />
        ))}
      </div>
    </section>
  );
}
