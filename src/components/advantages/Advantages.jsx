import React, { useState } from "react";
import styles from "./advantages.module.css";
import { Excellence } from "../excellence/Excellence";

export function Advantages() {
  const [advantage, setAdvantage] = useState([
    {
      id: 1,
      title: "Adaptive Design",
      subtitle:
        "Разрабатываю интерфейсы, которые одинаково комфортно работают на любом экране от смартфона до десктопа. Всегда уделяю внимание деталям и удобству пользователя.",
    },
    {
      id: 2,
      title: "Hard skills",
      subtitle:
        "Мой стек технологий включает HTML, CSS, JavaScript, Vue.js и TypeScript. А также инструменты тестирования Jest и Cypress.",
    },
    {
      id: 3,
      title: "Soft skills",
      subtitle:
        "Умею выстраивать эффективную коммуникацию в команде, грамотно планировать задачи и брать ответственность за результат. Спокойно реагирую на критику и умею адаптироваться к изменениям.",
    },
    {
      id: 4,
      title: "Just a good man",
      subtitle:
        "Стремлюсь делать проекты не просто функциональными, а продуманными и эстетичными. Уважительно отношусь к коллегам, клиентам и пользователям это помогает создавать действительно качественный продукт.",
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
