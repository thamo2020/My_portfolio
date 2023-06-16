import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/Portfolio1.png";
import Ecommerce from "../../img/2.png";
import HOC from "../../img/3.png";
import MusicApp from "../../img/4.png";
import pro5 from "../../img/5.png";
import pro6 from "../../img/6.png";
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
          <a href="https://github.com/thamo2020/gesture_restaurant">  <img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thamo2020/entertainment-hub"><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thamo2020/react-website-styled-components-v1"><img src={MusicApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/thamo2020/Glassmorphism-card-hover-effect"> <img src={HOC} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dribbble.com/shots/21521512-UI-design-for-Ice-and-Beverages-App?utm_source=Clipboard_Shot&utm_campaign=Thamodya&utm_content=UI%20design%20for%20Ice%20and%20Beverages%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Thamodya&utm_content=UI%20design%20for%20Ice%20and%20Beverages%20App&utm_medium=Social_Share"> <img src={pro5} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dribbble.com/shots/21521181-Interior-design-UI?utm_source=Clipboard_Shot&utm_campaign=Thamodya&utm_content=Interior%20design%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Thamodya&utm_content=Interior%20design%20UI&utm_medium=Social_Share"><img src={pro6} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
