import mainSlideImg7 from "../images/main_banner7.jpg";
import mainSlideImg2 from "../images/main_banner2.jpg";
import mainSlideImg3 from "../images/main_banner3.jpg";
import mainSlideImg4 from "../images/main_banner4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Tourist from ".././components/Tourist.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function TourLocation() {
  return (
    <main>
      <div className="main_banner">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={mainSlideImg7} alt="Information of Trip South Korea" />
            <h2>Embark on a Cultural Journey</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg2} alt="Information of Trip South Korea" />
            <h2>An Architectural Masterpiece and Sanctuary</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg3} alt="Information of Trip South Korea" />
            <h2>Views of Seoul's Glittering Skyline</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg4} alt="Information of Trip South Korea" />
            <h2>Explore the Majestic Beauty</h2>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="big_title">
        <h2>Tour location you can enjoy in South Korea</h2>
      </div>
      <div className="padding_wrap">
        <Tourist />
      </div>
    </main>
  );
}
export default TourLocation;
