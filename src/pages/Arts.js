import mainSlideImg5 from "../images/main_banner5.jpg";
import mainSlideImg2 from "../images/main_banner2.jpg";
import mainSlideImg3 from "../images/main_banner3.jpg";
import mainSlideImg4 from "../images/main_banner4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Art from ".././components/Art.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function Arts() {
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
            <img src={mainSlideImg5} alt="Information of Trip South Korea" />
            <h2>Korean art boasts a unique beauty,</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg2} alt="Information of Trip South Korea" />
            <h2>Elegance of Traditional Crafts</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg3} alt="Information of Trip South Korea" />
            <h2>Creativity in Contemporary Art</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg4} alt="Information of Trip South Korea" />
            <h2>Immerse Yourself in the Vibrant Colors</h2>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="big_title">
        <h2>Arts you can enjoy in South Korea</h2>
      </div>
      <div className="padding_wrap">
        <Art />
      </div>
    </main>
  );
}
export default Arts;
