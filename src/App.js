import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Photoshoper } from "./components/photoshoper/Photoshoper";
import { Slider } from "./components/slider/Slider";
import arrowImg from "./images/arrow.svg";
import smileImg from "./images/smile.png";
import img1 from "./images/hero-img.png";
import img2 from "./images/smile.png";
import { Advantages } from "./components/advantages/Advantages";
import { Project } from "./components/project/Project";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/about me/AboutMe";
import { Footer } from "./components/footer/Footer";

function App() {
  const [slides, setSlides] = useState([
    { id: 1, href: "#", src: img1, alt: "img1" },
    { id: 2, href: "#", src: img2, alt: "img2" },
  ]);
  const [slides2, setSlides2] = useState([
    { id: 1, href: "#", src: img1, alt: "img3" },
    { id: 2, href: "#", src: img2, alt: "img4" },
  ]);

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
        slides={slides}
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
          text: "Are you tired working with 2, 3 or 4 different teams? Conflicts, misunderstanding, too much time spent on communication are",
        }}
        slides={slides2}
      />
      <Advantages />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
