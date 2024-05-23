import mainSlideImg5 from "../images/main_banner5.jpg";
import mainSlideImg6 from "../images/main_banner6.jpg";
import mainSlideImg7 from "../images/main_banner7.jpg";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Info = () => {
  return (
    <main className="padding_wrap">
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
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg6} alt="Information of Trip South Korea" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mainSlideImg7} alt="Information of Trip South Korea" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="title_anima">
        <h2 class="animated-text">
          <span>D</span>
          <span>i</span>
          <span>s</span>
          <span>c</span>
          <span>o</span>
          <span>v</span>
          <span>e</span>
          <span>r</span>
          <span style={{ whiteSpace: "pre-wrap" }}> </span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
          <span style={{ whiteSpace: "pre-wrap" }}> </span>
          <span>M</span>
          <span>a</span>
          <span>g</span>
          <span>i</span>
          <span>c</span>
          <span style={{ whiteSpace: "pre-wrap" }}> </span>
          <span>o</span>
          <span>f</span>
          <br />
          <span>S</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>h</span>
          <span style={{ whiteSpace: "pre-wrap" }}> </span>
          <span>K</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>!</span>
        </h2>
      </div>
      <div>
        <p>
          Immerse yourself in a land where ancient traditions meet cutting-edge
          modernity. South Korea offers a unique blend of rich history, vibrant
          culture, and breathtaking landscapes that will captivate your heart.
        </p>
      </div>
      <h3>Why Visit South Korea?</h3>
      <ul className="why_list">
        <li>
          <div>
            <span>👉</span>Historic Treasures:
          </div>
          <p>
            Wander through centuries-old palaces, temples, and UNESCO World
            Heritage sites that tell the stories of Korea’s fascinating past.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Historic Treasures:
          </div>
          <p>
            Wander through centuries-old palaces, temples, and UNESCO World
            Heritage sites that tell the stories of Korea’s fascinating past.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Dynamic Cities:
          </div>
          <p>
            Experience the bustling energy of Seoul and Busan, where towering
            skyscrapers stand alongside charming traditional markets and
            tranquil parks.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Gastronomic Delights:
          </div>
          <p>
            Savor the diverse flavors of Korean cuisine, from sizzling BBQ to
            spicy kimchi, and explore the trendy cafes and street food stalls
            that dot every corner.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Natural Beauty:
          </div>
          <p>
            Escape to serene countryside, majestic mountains, and stunning
            coastlines. Don’t miss the picturesque Jeju Island, known for its
            volcanic landscapes and beautiful beaches.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Cultural Experiences:
          </div>
          <p>
            Engage in immersive cultural activities like traditional tea
            ceremonies, Hanbok (Korean traditional dress) experiences, and K-pop
            dance classes.
          </p>
        </li>
        <li>
          <div>
            <span>👉</span>Festivals and Events:
          </div>
          <p>
            Join in the excitement of vibrant festivals throughout the year,
            such as the Boryeong Mud Festival, the Busan International Film
            Festival, and cherry blossom celebrations.
          </p>
        </li>
      </ul>
      <h2>Your Adventure Awaits!</h2>
      <p>
        Whether you're an adventurer, a foodie, a history buff, or a K-pop fan,
        South Korea has something extraordinary to offer you. Come and create
        unforgettable memories in a country that’s as welcoming as it is
        fascinating.
      </p>
    </main>
  );
};

export default Info;
