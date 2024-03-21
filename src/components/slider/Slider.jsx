import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import img1 from "../../images/hero-img.png";
import img2 from "../../images/smile.png";
import styles from "./slider.module.css";

export const Slider = () => (
  <Splide
    aria-label="My Favorite Images"
    options={{
      type: "loop",
      width: 300,
      focus: "center",
      gap: "1rem",
      padding: { left: "25%", right: "25%" },
    }}
  >
    <SplideSlide>
      <a href="#">
        <img src={img1} alt="Image 1" className={styles.img} />
      </a>
    </SplideSlide>
    <SplideSlide>
      <a href="#">
        <img src={img2} alt="Image 2" className={styles.img} />
      </a>
    </SplideSlide>
    <SplideSlide>
      <a href="#">
        <img src={img1} alt="Image 3" className={styles.img} />
      </a>
    </SplideSlide>
    <SplideSlide>
      <a href="#">
        <img src={img2} alt="Image 4" className={styles.img} />
      </a>
    </SplideSlide>
  </Splide>
);
