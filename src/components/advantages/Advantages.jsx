import React, { useState } from "react";
import styles from "./advantages.module.css";
import { Excellence } from "../excellence/Excellence";

export function Advantages() {
  const [advantage, setAdvantage] = useState([
    {
      id: 1,
      title: "Adaptive Design",
      subtitle:
        "Are you tired working with 2, 3 or 4 different teams? Conflicts, misunderstanding, too much time spent on communication are ",
    },
    {
      id: 2,
      title: "Code optimization",
      subtitle:
        "Non-complex approach results in lack of understanding your business goals and actions that should be taken on time.",
    },
    {
      id: 3,
      title: "Soft skills",
      subtitle:
        "Working on one project for long-term period helps us to automate the process and always be ready for  actions we plan in advance.",
    },
    {
      id: 4,
      title: "Just a good man",
      subtitle:
        "Working on one project for long-term period helps us to automate the process and always be ready for  actions we plan in advance.",
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
