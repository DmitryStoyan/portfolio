import React, { useState } from "react";
import styles from "./advantages.module.css";
import { Excellence } from "../excellence/Excellence";

export function Advantages() {
  const [advantage, setAdvantage] = useState([
    {
      id: 1,
      title: "Adaptive Design",
      subtitle:
        "Я специализируюсь на создании интерфейсов, которые идеально отображаются на различных устройствах, обеспечивая удобство использования для всех пользователей.",
    },
    {
      id: 2,
      title: "Hard skills",
      subtitle:
        "Мой стек технологий включает HTML, CSS, JavaScript, Vue.js, React.js, а также инструменты тестирования Jest и Cypress. Я также знаком с TypeScript.",
    },
    {
      id: 3,
      title: "Soft skills",
      subtitle:
        "Я обладаю развитыми коммуникативными навыками и умею эффективно работать в команде, что помогает достигать совместных целей и поддерживать продуктивное рабочее окружение.",
    },
    {
      id: 4,
      title: "Just a good man",
      subtitle:
        "Я стремлюсь к этичному подходу в работе и в жизни, что отражается в моем отношении к коллегам, пользователям и проектам, с которыми я работаю.",
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
