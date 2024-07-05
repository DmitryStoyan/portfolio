import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import styles from "./slider.module.css";

export const Slider = ({ slides }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        focus: "center",
        gap: "1rem",
        wheel: true,
        wheelSleep: 300,
      }}
      className={styles.slider}
    >
      {slides.map((slide) => (
        <SplideSlide key={slide.id}>
          <a href={slide.href}>
            <img src={slide.src} alt={slide.alt} className={styles.img} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};
