import React, { useState } from "react";
import styles from "./projects.module.css";
import { Project } from "../project/Project";
import randomGame from "../../images/randomGame.png";
import aionDestiny from "../../images/AionDestiny.png";
// import anonChat from "../../images/bot.png";
import anonChat from "../../images/anonChatImg.jpg";
// import YoBro from "../../images/YoBro.png";
import YoBro from "../../images/send-push.gif";

export function Projects() {
  const [cards, setCards] = useState([
{
  id: 1,
  title: "Aion Destiny",
  imgSrc: aionDestiny,
  imgAlt: "Aion Destiny",
  link: "https://aiondestiny.net/",
  storyTitle: "Aion Destiny — игровой портал MMORPG-сервера",
  storySubtitle:
    "Коммерческий сайт игрового сервера Aion Destiny. Со стороны frontend я разрабатывал и поддерживал пользовательский интерфейс, реализовывал клиентские сценарии, регистрацию и авторизацию, а также взаимодействие с готовым API. Проект включает личный кабинет пользователя, систему достижений и интеграцию с форумом, вынесенным на отдельный субдомен.",
  storyStackSubtitle:
    "HTML, CSS, JavaScript, REST API",
  fullWidth: false,
},
{
  id: 2,
  title: "Yo Bro App",
  imgSrc: YoBro,
  imgAlt: "Yo Bro App",
  link: "https://yo-bro.vercel.app/",
  storyTitle: "Yo Bro - мобильное SPA-приложение",
  storySubtitle:
    "Кроссплатформенное SPA-приложение, реализованное на Vue 3 и Quasar. В проекте я отвечал за разработку клиентской архитектуры, управление состоянием приложения и интеграцию с Firebase для аутентификации пользователей, хранения данных и отправки push-уведомлений. Приложение адаптировано под мобильные устройства и может быть собрано как нативное мобильное приложение с помощью Capacitor.",
  storyStackSubtitle:
    "Vue 3, Quasar, Pinia, Vite, Capacitor, Firebase",
  fullWidth: false,
},
{
  id: 3,
  title: "Random Game",
  imgSrc: randomGame,
  imgAlt: "Random Game",
  link: "https://game-random-puce.vercel.app/",
  storyTitle: "Random Game - PWA рулетка для выбора игр",
  storySubtitle:
    "Прогрессивное веб приложение, разработанное с фокусом на пользовательский опыт и офлайн доступность. Реализует сценарий случайного выбора игры из пользовательской коллекции с использованием PWA-подходов: Service Worker, кэширование ресурсов и установка на устройство. Проект демонстрирует работу с браузерными API, состояниями приложения и оптимизацию клиентской логики.",
  storyStackSubtitle:
    "PWA, JavaScript, HTML, CSS, Service Worker",
  fullWidth: false,
},

{
  id: 4,
  title: "Анонимный чат бот Telegram",
  imgSrc: anonChat,
  imgAlt: "Telegram Anonymous Chat Bot",
  link: "https://t.me/anonimnieZnakomstva1_bot",
  storyTitle: "Telegram-бот для анонимного общения",
  storySubtitle:
    "Телеграм бот для анонимного общения между пользователями, реализующий сценарии поиска собеседника, установления соединения и обмена сообщениями. В проекте я работал с Telegram Bot API, реализовывал асинхронную логику взаимодействия пользователей, управление состояниями диалога и хранение данных в базе.",
  storyStackSubtitle:
    "JavaScript, Node.js, Telegram Bot API (Telegraf), MongoDB",
  fullWidth: false,
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
