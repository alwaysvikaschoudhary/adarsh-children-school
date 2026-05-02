import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar, FaGraduationCap, FaUsers, FaBuilding, FaBook } from 'react-icons/fa';

const InfiniteSlider = () => {
  const achievements = [
    { icon: FaTrophy, text: 'Top 1000 Schools in India', color: 'text-yellow-500' },
    { icon: FaMedal, text: '38 Gold Medals in Olympiad', color: 'text-orange-500' },
    { icon: FaAward, text: 'Best Principal Award 2024', color: 'text-blue-500' },
    { icon: FaStar, text: '5 Black Belts in Karate', color: 'text-red-500' },
    { icon: FaGraduationCap, text: '100% Board Results', color: 'text-green-500' },
    { icon: FaUsers, text: '30000+ Alumni Network', color: 'text-purple-500' },
    { icon: FaBuilding, text: '2 Modern Campuses', color: 'text-indigo-500' },
    { icon: FaBook, text: '12+ Years of Excellence', color: 'text-pink-500' },
  ];

  return (
    <section className="relative py-8 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
        }}></div>
      </div>

      <div className="relative">
        {/* Slider Container */}
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {/* First Set */}
          {achievements.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center space-x-3 mx-8 min-w-max bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <item.icon className={`text-2xl ${item.color}`} />
              <span className="text-white font-semibold whitespace-nowrap">{item.text}</span>
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {achievements.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center space-x-3 mx-8 min-w-max bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <item.icon className={`text-2xl ${item.color}`} />
              <span className="text-white font-semibold whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
