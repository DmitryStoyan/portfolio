import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Photoshoper } from "./components/photoshoper/Photoshoper";
import { Slider } from "./components/slider/Slider";
import arrowImg from "./images/arrow.svg";

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
      {/* <Slider /> */}
    </div>
  );
}

export default App;
