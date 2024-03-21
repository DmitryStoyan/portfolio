import React from "react";
import "./photoshoper.css";
import { Slider } from "../slider/Slider";

export function Photoshoper(props) {
  return (
    <section className="photoshoper">
      <div className={`photoshoper__slider ${props.info.sliderClass}`}>
        <Slider />
      </div>
      <div className="photoshoper__description">
        <h2 className="photoshoper__title">{props.info.title}</h2>
        <h3 className="photoshoper__subtitle">{props.info.subtitle}</h3>
        <p className="title-text">{props.info.title_text}</p>
        <div className="photoshoper__messageWrapper">
          <img
            className="photoshoper__imgArrow"
            src={props.info.imageSrc}
            alt=""
          />
          <span className="photoshoper__messageTitle">
            {props.info.messageTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
