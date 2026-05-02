import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const images = [
    '/images/Leaderboard/leaderboard_1.jpg',
    '/images/Leaderboard/leaderboard_2.jpg',
    '/images/Leaderboard/leaderboard_3.png',
    '/images/Leaderboard/leaderboard_4.png',
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
        className="w-full h-[50vh] md:h-[70vh] lg:h-[85vh] shadow-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center bg-white">
              <img
                src={img}
                alt={`Leaderboard Slide ${index + 1}`}
                className="w-full h-full object-contain md:object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Optional orange banner like in the screenshot */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-3">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider flex items-center">
            <span className="mr-2">🎉</span> Admissions Open for session 2026-27
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
