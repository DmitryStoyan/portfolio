import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Photoshoper } from "./components/photoshoper/Photoshoper";
import { Slider } from "./components/slider/Slider";
import arrowImg from "./images/arrow.svg";
import smileImg from "./images/smile.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Photoshoper
        info={{
          title: "(It's me)",
          subtitle:
            "In difficult times, I always supported people. All cases I participated in are successful",
          imageSrc: arrowImg,
          messageTitle: "there are a lot of pictures",
        }}
      />
      <Photoshoper
        info={{
          title: "( I can do that )",
          subtitle: "Clean code",
          title_text:
            "Are you tired working with 2, 3 or 4 different teams? Conflicts, misunderstanding, too much time spent on communication are",
          imageSrc: smileImg,
          messageTitle: "this is the perfect code",
          sliderClass: "photoshoper__slider_right",
          messageWrapperClass: "photoshoper__messageTitle_right",
        }}
      />
    </div>
  );
}

export default App;
