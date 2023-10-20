import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import food from "../../img/food.png";
import fiber from "../../img/fiber.png";
import visa from "../../img/visa.png";
import WhatsApp from "../../img/WhatsApp.png";
import screen from "../../img/screen.png"
import Scr from "../../img/Scr.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={food} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fiber} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Scr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={visa} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={WhatsApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
