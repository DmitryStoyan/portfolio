import React from "react";
import styles from "./project.module.css";
import arrowButton from "../../images/arrow-button.svg";
import project1 from "../../images/project1.jpg";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";

export function Project(props) {
  return (
    <a
      className={`${styles.project} ${props.className}`}
      href={props.item.link}
      target="_blank"
    >
      <img
        src={props.item.imgSrc}
        alt={props.item.imgAlt}
        className={styles.project__image}
      />
      <div className={styles.project__descriptionWrapper}>
        <p className={styles.project__title}>{props.item.title}</p>
        <button className={styles.project__button}>
          View case{" "}
          <img src={arrowButton} alt="" className={styles.button_img} />
        </button>
      </div>
    </a>
  );
}
