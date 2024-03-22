import React from "react";
import styles from "./photoshoper.module.css";
import { Slider } from "../slider/Slider";

export function Photoshoper(props) {
  return (
    <section className={styles.photoshoper}>
      <div className={styles[props.info.sliderClass]}>
        <Slider />
      </div>
      <div className={styles.photoshoper__description}>
        <h3 className={styles.photoshoper__title}>{props.info.title}</h3>
        <p className={styles.photoshoper__subtitle}>{props.info.subtitle}</p>
        <div className={`${styles.photoshoper__messageWrapper}`}>
          <img
            className={`${styles.photoshoper__imgArrow} ${
              styles[props.info.messageWrapperClass]
            }`}
            src={props.info.imageSrc}
            alt=""
          />
          <span className={`${styles.photoshoper__messageTitle}`}>
            {props.info.messageTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
