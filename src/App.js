import React, { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Photoshoper } from "./components/photoshoper/Photoshoper";
import { Slider } from "./components/slider/Slider";
import arrowImg from "./images/arrow.svg";
import arrowImg2 from "./images/arrow2.png";
import smileImg from "./images/smile.png";

import myPhoto1 from "./images/myPhoto1.jpg";
import myPhoto2 from "./images/myPhoto2.jpg";
import myPhoto3 from "./images/myPhoto3.jpg";
import myPhoto4 from "./images/myPhoto4.jpg";

import codePhoto1 from "./images/codePhoto1.jpeg";
import codePhoto2 from "./images/codePhoto2.jpeg";
import codePhoto3 from "./images/codePhoto3.jpeg";
import codePhoto4 from "./images/codePhoto4.jpeg";
import codePhoto5 from "./images/codePhoto5.jpeg";
import codePhoto6 from "./images/codePhoto1.jpeg";
import codePhoto7 from "./images/codePhoto7.jpeg";

import { Advantages } from "./components/advantages/Advantages";
import { Project } from "./components/project/Project";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/about me/AboutMe";
import { Footer } from "./components/footer/Footer";

function App() {
  const [slides, setSlides] = useState([
    { id: 1, href: "#", src: myPhoto1, alt: "img1" },
    { id: 2, href: "#", src: myPhoto2, alt: "img2" },
    { id: 3, href: "#", src: myPhoto3, alt: "img2" },
    { id: 4, href: "#", src: myPhoto4, alt: "img2" },
  ]);
  const [slides2, setSlides2] = useState([
    { id: 1, href: "#", src: codePhoto1, alt: "img3" },
    { id: 2, href: "#", src: codePhoto2, alt: "img4" },
    { id: 3, href: "#", src: codePhoto3, alt: "img4" },
    { id: 4, href: "#", src: codePhoto4, alt: "img4" },
    { id: 5, href: "#", src: codePhoto5, alt: "img4" },
    { id: 6, href: "#", src: codePhoto6, alt: "img4" },
    { id: 7, href: "#", src: codePhoto7, alt: "img4" },
  ]);

  const [arrowSrc, setArrowSrc] = useState(arrowImg);
  const [hideElements, setHideElements] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth <= 450) {
        setArrowSrc(arrowImg2);
        setHideElements(true);
      } else {
        setArrowSrc(arrowImg);
        setHideElements(false);
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Photoshoper
        info={{
          id: "cases",
          title: "(It's me)",
          subtitle:
            "Нетворкинг - моя сильная сторона и я дружу с самыми разными людьми!",
          imageSrc: arrowSrc,
          messageTitle: "Это мои друзья :-)",
        }}
        slides={slides}
      />
      <Photoshoper
        info={{
          title: "( I can do that )",
          subtitle: "More creativity",
          title_text:
            "Are you tired working with 2, 3 or 4 different teams? Conflicts, misunderstanding, too much time spent on communication are",
          imageSrc: hideElements ? null : smileImg,
          messageTitle: hideElements ? null : "это идеальный код",
          sliderClass: "photoshoper__slider_right",
          messageWrapperClass: "photoshoper__messageTitle_right",
          text: "Кому-то из них сложно найти любовь, а с кем-то мы не можем решить, играть сегодня в Доту или CS... Я стремлюсь создавать приложения которые облегчают жизнь разным людям. Ниже подробнее о них.",
          customSliderClass: hideElements ? "custom-slider-margin" : "",
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
