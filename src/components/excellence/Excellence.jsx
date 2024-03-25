import React from "react";
import styles from "./excellence.module.css";

export function Excellence(props) {
  return (
    <li className={styles.excellence__item}>
      <h3 className={styles.excellence__title}>
        {props.item.title}
        <span className={styles.excellence__dot}>.</span>
      </h3>
      <p className={styles.excellence__subtitle}>{props.item.subtitle}</p>
    </li>
  );
}
