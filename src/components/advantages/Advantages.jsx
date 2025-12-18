import React, { useState } from "react";
import styles from "./advantages.module.css";
import { Excellence } from "../excellence/Excellence";

export function Advantages() {
  const [advantage, setAdvantage] = useState([
    {
      id: 1,
      title: "Adaptive Design",
      subtitle:
        "Проектирую и реализую адаптивные интерфейсы, корректно работающие на различных устройствах и разрешениях. Уделяю внимание UX, доступности и визуальной консистентности интерфейсов.",
    },
    {
      id: 2,
      title: "Hard skills",
      subtitle:
        "Уверенно работаю с HTML, CSS, JavaScript, TypeScript, Vue.js. Использую современные инструменты сборки и тестирования (Vite, Jest, Cypress), понимаю принципы построения масштабируемого фронтенда.",
    },
    {
      id: 3,
      title: "Soft skills",
      subtitle:
        "Умею эффективно работать в команде: планировать задачи, брать ответственность за результат, конструктивно воспринимать обратную связь и быстро адаптироваться к изменениям.",
    },
    {
      id: 4,
      title: "Just a good man",
      subtitle:
        "Ориентирован на качество кода и долгосрочную поддержку решений. Стараюсь делать интерфейсы не только функциональными, но и продуманными с точки зрения пользователя и бизнеса.",
    },
  ]);
  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantages__title}>( My four advantages )</h2>
      <ul className={styles.advantages__list}>
        {advantage.map((item) => (
          <Excellence item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
