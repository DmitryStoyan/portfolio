import React, { useState } from "react";
import styles from "./projects.module.css";
import { Project } from "../project/Project";
import img1 from "../../images/project1.jpg";
import img2 from "../../images/project2.jpg";
import img3 from "../../images/project3.jpg";

export function Projects() {
  const [cards, setCards] = useState([
    { id: 1, title: "Первый проект", imgSrc: img1, imgAlt: "img1" },
    { id: 2, title: "Второй проект", imgSrc: img2, imgAlt: "img2" },
    { id: 3, title: "Третий проект", imgSrc: img3, imgAlt: "img3" },
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
