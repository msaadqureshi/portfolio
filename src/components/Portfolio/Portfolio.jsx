import React, { useContext } from "react";
import "./Portfolio.css";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project1 from "../../img/project2.gif";
import project2 from "../../img/project.png";
import project3 from "../../img/project4.png";
import project4 from "../../img/project5.gif";
import project5 from "../../img/project6.gif";
import project6 from "../../img/project3.gif";
import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const slideImages = [
    { img: project1 },
    { img: project2 },
    { img: project3 },
    { img: project4 },
    { img: project5 },
    { img: project6 },
    // { img: Sidebar },
  ];
  const slides = [];
  for (let i = 0; i < 8; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          style={{ width: "100%" }}
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}

      <span style={{ color: darkMode ? "white" : "black" }}>
        <span>Portfolio</span> Recent Projects
      </span>
      {/* slider */}
      <Swiper
        className="swiper-container"
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        breakpoints={{
          0: {
            // width: 0,
            slidesPerView: 1,
          },
          480: {
            // width: 640,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1024: {
            // width: 1024,
            slidesPerView: 4,
          },
          1280: {
            // width: 1280,
            slidesPerView: 5,
          },
        }}
        id="main"
        navigation
        spaceBetween={10}
      >
        {slideImages.map((item, idx) => {
          return (
            <SwiperSlide key={`slide-${idx}`} tag="li">
              <img
                style={{ width: "100%" }}
                src={item.img}
                alt={`Slide ${idx}`}
              />
            </SwiperSlide>
          );
        })}
        {/* {slides} */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
