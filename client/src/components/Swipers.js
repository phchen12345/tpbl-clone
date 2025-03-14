import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Swipers = () => {
  return (
    <Swiper
      className="flex"
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectCoverflow,
      ]}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 3, // 視窗大於 820px 時顯示 3 張
        },
        0: {
          slidesPerView: 1, // 視窗小於 820px 時顯示 1 張
        },
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
      }}
      autoplay={{ delay: 900 }}
      loop={true}
      loopAdditionalSlides={1}
      // centeredSlides={true}
      effect="coverflow"
      Scrollbar={{ draggable: true }}
      coverflowEffect={{
        rotate: 0, // 不旋轉
        stretch: 0, // 拉伸
        depth: 0, // 深度，數值越大，中間的 Slide 越突出
        modifier: 1, // 變形係數
        slideShadows: false, // 是否開啟陰影
      }}
    >
      {[
        "https://assets.tpbl.basketball/production/banners/iBRZ9GfSCw45VyokV5QLAhoe5KO9dl7LHVYzCiAu.jpg?20241018154647",
        "https://assets.tpbl.basketball/production/banners/Dm07WATLFiqC75sJAlMTWeCi8cBtZIUYpdIypcl1.jpg?20250114203702",
        "https://assets.tpbl.basketball/production/banners/dVRrQhiu10HCGFyo0qlqrpotXPOlB9G7hm8ZsN5C.jpg?20250307150827",
        "https://assets.tpbl.basketball/production/banners/H1qj03hvJPAmLJrhwyIV5GzqCrkp8YukzDQyJgUt.jpg?20250225140303",
        "https://assets.tpbl.basketball/production/banners/TOUgKboj1DvmgeBKsrxhnka8Qb5AYMKAPC7HIQnw.jpg?20250304141751",
        "https://assets.tpbl.basketball/production/banners/JsEmL5U94dXnTLb8mpEDwHqt6hhxCM62p5J9UrwV.jpg?20250221171642",
      ].map((src, index) => (
        <SwiperSlide key={index} className="">
          <img
            className="w-[90%]  rounded-lg shadow-lg object-cover mx-auto"
            src={src}
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipers;
