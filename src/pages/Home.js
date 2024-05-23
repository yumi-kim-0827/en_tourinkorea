import mainSlideImg1 from "../images/main_banner1.jpg";
import mainSlideImg2 from "../images/main_banner2.jpg";
import mainSlideImg3 from "../images/main_banner3.jpg";
import mainSlideImg4 from "../images/main_banner4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Festival from ".././components/Festival.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function Home() {
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
            <img src={mainSlideImg1} alt="Information of Trip South Korea" />
            <h2>Discover the vibrant charm of South Korea!</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg2} alt="Information of Trip South Korea" />
            <h2>Unveil the treasures of Korea's rich culture and history</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg3} alt="Information of Trip South Korea" />
            <h2>
              Embark on an unforgettable journey through the heart of Korea
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg4} alt="Information of Trip South Korea" />
            <h2>Experience the wonders of Korea's unique traditions</h2>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="big_title">
        <h2>Events you can enjoy in South Korea</h2>
      </div>
      <div className="padding_wrap">
        <Festival />
      </div>
    </main>
  );
}
export default Home;
