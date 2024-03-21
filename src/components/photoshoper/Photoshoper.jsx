import React from "react";
import styles from "./photoshoper.module.css";

export function Photoshoper(props) {
  return (
    <section className={styles.photoshoper}>
      {/* <div className={styles.photoshoper__slider}></div> */}
      <div className={styles.photoshoper__description}>
        <h3 className={styles.photoshoper__title}>{props.info.title}</h3>
        <p className={styles.photoshoper__subtitle}>{props.info.subtitle}</p>
        <div className={styles.photoshoper__messageWrapper}>
          <img
            className={styles.photoshoper__imgArrow}
            src={props.info.imageSrc}
            alt=""
          />
          <span className={styles.photoshoper__messageTitle}>
            {props.info.messageTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
