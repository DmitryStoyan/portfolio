import React from "react";
import styles from "./project.module.css";
import projectStyles from "../projects/projects.module.css";
import arrowButton from "../../images/arrow-button.svg";

export function Project(props) {
  const hasFullWidthClass = props.className
    .split(" ")
    .includes(projectStyles.fullWidth);
  console.log(props.className, hasFullWidthClass);
  const wrapperStoryClass = `${styles.wrapperStory} ${
    hasFullWidthClass ? styles.fullWidthWrapperStory : ""
  }`;

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
      <div className={wrapperStoryClass}>
        <div className={styles.wrapperContent}>
          <h2 className={styles.storyTitle}>{props.item.storyTitle}</h2>
          <p className={styles.storySubtitle}>{props.item.storySubtitle}</p>
          <h3 className={styles.storyStackTitle}>
            Стек технологий:{" "}
            <span className={styles.storyStackSubtitle}>
              {props.item.storyStackSubtitle}
            </span>
          </h3>
        </div>
      </div>
    </a>
  );
}
