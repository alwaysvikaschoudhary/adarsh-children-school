import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const images = [
    '/images/Leaderboard/Leaderboard_0.png',
    '/images/Leaderboard/Leaderboard_1.png',
    '/images/Leaderboard/Leaderboard_2.png',
    '/images/Leaderboard/Leaderboard_3.png',
    '/images/Leaderboard/Leaderboard_4.png',
    '/images/Leaderboard/Leaderboard_5.png',
    '/images/Leaderboard/Leaderboard_6.png',
  ];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-gray-50">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[40vh] md:h-[70vh] lg:h-[85vh] shadow-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gray-900">
              <img
                src={img}
                alt={`Leaderboard Slide ${index + 1}`}
                className="w-full h-full object-cover object-top"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Optional orange banner like in the screenshot */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-1">
        <div className="container mx-auto px-0 flex justify-center items-center">
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider flex items-center">
            <span className="mr-2">🎉</span> Admissions Open for session 2026-27
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
