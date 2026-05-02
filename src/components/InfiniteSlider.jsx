import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { FaTrophy, FaMedal, FaAward, FaStar, FaGraduationCap, FaUsers, FaBuilding, FaBook } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const InfiniteSlider = () => {
  const achievements = [
    { icon: FaTrophy, text: 'Top 1000 Schools in India', color: 'text-yellow-500' },
    { icon: FaMedal, text: '38 Gold Medals in Olympiad', color: 'text-orange-500' },
    { icon: FaAward, text: 'Best Principal Award 2024', color: 'text-blue-500' },
    { icon: FaStar, text: '5 Black Belts in Karate', color: 'text-red-500' },
    { icon: FaGraduationCap, text: '100% Board Results', color: 'text-green-500' },
    { icon: FaUsers, text: '30000+ Alumni Network', color: 'text-purple-500' },
    { icon: FaBook, text: '12+ Years of Excellence', color: 'text-pink-500' },
  ];

  return (
    <section className="relative py-4 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
        }}></div>
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="achievement-swiper"
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 select-none"
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span className="text-white text-sm font-semibold whitespace-nowrap">{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
          {/* Add more slides to ensure smoothness if needed, but loop:true handles it */}
          {achievements.map((item, index) => (
            <SwiperSlide key={`extra-${index}`} className="!w-auto">
              <div
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 select-none"
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span className="text-white text-sm font-semibold whitespace-nowrap">{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InfiniteSlider;
