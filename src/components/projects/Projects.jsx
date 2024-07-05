import React, { useState } from "react";
import styles from "./projects.module.css";
import { Project } from "../project/Project";
import img1 from "../../images/project1.jpg";
import img2 from "../../images/project2.jpg";
import img3 from "../../images/project3.jpg";
import randomGame from "../../images/randomGame.png";
import aionDestiny from "../../images/AionDestiny.png";
import anonChat from "../../images/bot.png";

export function Projects() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Aion Destiny",
      imgSrc: aionDestiny,
      imgAlt: "Aion Destiny",
      link: "https://aiondestiny.net/",
    },
    {
      id: 2,
      title: "Анонимный чат бот ТГ",
      imgSrc: anonChat,
      imgAlt: "Анонимный чат",
      link: "https://doka.guide/",
    },
    {
      id: 3,
      title: "Random Game",
      imgSrc: randomGame,
      imgAlt: "randomGame",
      link: "https://game-random-puce.vercel.app/",
    },
  ]);

  return (
    <section className={styles.projects}>
      <h2 className={styles.projects__title}>( Projects )</h2>
      <div className={styles.projects__wrapper}>
        {cards.map((item, index) => (
          <Project
            item={item}
            key={item.id}
            className={index === 2 ? styles.fullWidth : ""}
          />
        ))}
      </div>
    </section>
  );
}
