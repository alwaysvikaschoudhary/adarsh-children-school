import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaTimes } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  // Real school images
  // Real school images from organized folders
  const galleryImages = [
    { url: "/images/Achievements/achievements_1.jpg", title: "Merit Award 2024", category: "Achievements" },
    { url: "/images/Achievements/achievements_2.jpg", title: "State Level Sports Trophy", category: "Achievements" },
    { url: "/images/Achievements/achievements_3.jpg", title: "Academic Excellence Award", category: "Achievements" },
    { url: "/images/Achievements/achievements_4.jpg", title: "Science Fair Winner", category: "Achievements" },
    { url: "/images/Achievements/achievements_5.jpg", title: "Cultural Achievement", category: "Achievements" },
    { url: "/images/Activities/activities_1.jpg", title: "Morning Assembly", category: "Activities" },
    { url: "/images/Activities/activities_2.jpg", title: "Yoga Session", category: "Activities" },
    { url: "/images/Activities/activities_3.jpg", title: "Art & Craft Class", category: "Activities" },
    { url: "/images/Activities/activities_4.jpg", title: "Science Lab Experiment", category: "Activities" },
    { url: "/images/Activities/activities_5.jpg", title: "Computer Lab Session", category: "Activities" },
    { url: "/images/Activities/activities_6.jpg", title: "Music Class", category: "Activities" },
    { url: "/images/Campus/campus_1.jpg", title: "Main School Building", category: "Campus" },
    { url: "/images/Campus/campus_2.jpg", title: "Lush Green Playground", category: "Campus" },
    { url: "/images/Campus/campus_3.jpg", title: "Well-Equipped Library", category: "Campus" },
    { url: "/images/Campus/campus_4.jpg", title: "Modern Classrooms", category: "Campus" },
    { url: "/images/Campus/campus_5.jpg", title: "Auditorium", category: "Campus" },
    { url: "/images/Events/events_1.jpg", title: "Annual Function Celebration", category: "Events" },
    { url: "/images/Events/events_2.jpg", title: "Independence Day Celebration", category: "Events" },
    { url: "/images/Events/events_3.jpg", title: "Teachers Day Program", category: "Events" },
    { url: "/images/Events/events_4.jpg", title: "Cultural Fest", category: "Events" },
    { url: "/images/Sports/sports_1.jpg", title: "Inter-School Cricket Match", category: "Sports" },
    { url: "/images/Sports/sports_2.png", title: "Basketball Championship", category: "Sports" },
    { url: "/images/Sports/sports_3.png", title: "Athletics Meet", category: "Sports" },
    { url: "/images/Leaderboard/leaderboard_1.png", title: "Class 12th Topper", category: "Leaderboard" },
    { url: "/images/Leaderboard/leaderboard_2.png", title: "Class 10th Topper", category: "Leaderboard" },
    { url: "/images/Leaderboard/leaderboard_3.png", title: "Academic Achiever", category: "Leaderboard" },
    { url: "/images/Leaderboard/leaderboard_4.png", title: "School Topper", category: "Leaderboard" },
  ];

  const categories = ['All', 'Achievements', 'Activities', 'Campus', 'Events', 'Sports', 'Leaderboard'];
  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Glimpses of life at Adarsh Children's Senior Secondary School
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${filter === cat
                ? 'gradient-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Slider - Mobile Optimized */}
        <div className="mb-8 md:mb-16 animate-fade-in">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            loop={true}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-64 md:h-96 lg:h-[500px]"
          >
            {filteredImages.slice(0, 8).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                    <span className="bg-accent-500 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 inline-block">
                      {image.category}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gallery Grid - Mobile Optimized */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4"
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl shadow-lg card-hover transition-all duration-700 ${gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              style={{
                transitionDelay: gridVisible ? `${index * 50}ms` : '0ms'
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-white">
                  <span className="bg-accent-500 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold mb-1 inline-block">
                    {image.category}
                  </span>
                  <p className="text-xs md:text-sm font-bold line-clamp-1">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-2xl md:text-3xl hover:text-accent-300 transition bg-black/50 rounded-full p-2 md:p-3"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Showing <strong>{filteredImages.length}</strong> {filter !== 'All' ? `${filter} ` : ''}
            {filteredImages.length === 1 ? 'photo' : 'photos'}
          </p>
          <a
            href="https://www.instagram.com/shree_krishna_publicudairamsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <span>📸</span>
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
