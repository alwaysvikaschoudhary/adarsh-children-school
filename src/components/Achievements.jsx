import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
  FaGraduationCap,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [awardRef, awardVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [resultsRef, resultsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.1 });

  const galleryData = [
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_1.jpg",
      title: "Achievements Image 1",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_2.jpg",
      title: "Achievements Image 2",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_3.jpg",
      title: "Achievements Image 3",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_4.jpg",
      title: "Achievements Image 4",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_5.jpg",
      title: "Achievements Image 5",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_6.png",
      title: "Achievements Image 6",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_7.png",
      title: "Achievements Image 7",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_8.png",
      title: "Achievements Image 8",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_9.png",
      title: "Achievements Image 9",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_10.png",
      title: "Achievements Image 10",
    },
    {
      category: "Achievements",
      src: "/images/Achievements/achievements_11.png",
      title: "Achievements Image 11",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_1.jpg",
      title: "Activities Image 1",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_2.jpg",
      title: "Activities Image 2",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_3.jpg",
      title: "Activities Image 3",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_4.jpg",
      title: "Activities Image 4",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_5.jpg",
      title: "Activities Image 5",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_6.jpg",
      title: "Activities Image 6",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_7.jpg",
      title: "Activities Image 7",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_8.jpg",
      title: "Activities Image 8",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_9.png",
      title: "Activities Image 9",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_10.png",
      title: "Activities Image 10",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_11.jpg",
      title: "Activities Image 11",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_12.jpg",
      title: "Activities Image 12",
    },
    {
      category: "Activities",
      src: "/images/Activities/activities_13.jpg",
      title: "Activities Image 13",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_1.jpg",
      title: "Campus Image 1",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_2.jpg",
      title: "Campus Image 2",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_3.jpg",
      title: "Campus Image 3",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_4.jpg",
      title: "Campus Image 4",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_5.jpg",
      title: "Campus Image 5",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_6.jpg",
      title: "Campus Image 6",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_7.jpg",
      title: "Campus Image 7",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_8.jpg",
      title: "Campus Image 8",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_9.jpg",
      title: "Campus Image 9",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_10.png",
      title: "Campus Image 10",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_11.png",
      title: "Campus Image 11",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_12.png",
      title: "Campus Image 12",
    },
    {
      category: "Campus",
      src: "/images/Campus/campus_13.jpg",
      title: "Campus Image 13",
    },
    {
      category: "Events",
      src: "/images/Events/events_1.jpg",
      title: "Events Image 1",
    },
    {
      category: "Events",
      src: "/images/Events/events_2.jpg",
      title: "Events Image 2",
    },
    {
      category: "Events",
      src: "/images/Events/events_3.jpg",
      title: "Events Image 3",
    },
    {
      category: "Events",
      src: "/images/Events/events_4.jpg",
      title: "Events Image 4",
    },
    {
      category: "Events",
      src: "/images/Events/events_5.jpg",
      title: "Events Image 5",
    },
    {
      category: "Events",
      src: "/images/Events/events_6.png",
      title: "Events Image 6",
    },
    {
      category: "Sports",
      src: "/images/Sports/sports_1.jpg",
      title: "Sports Image 1",
    },
    {
      category: "Sports",
      src: "/images/Sports/sports_2.png",
      title: "Sports Image 2",
    },
    {
      category: "Sports",
      src: "/images/Sports/sports_3.png",
      title: "Sports Image 3",
    },
    {
      category: "Sports",
      src: "/images/Sports/sports_4.png",
      title: "Sports Image 4",
    },
    {
      category: "Leaderboard",
      src: "/images/Leaderboard/leaderboard_1.png",
      title: "Topper 1",
    },
    {
      category: "Leaderboard",
      src: "/images/Leaderboard/leaderboard_2.png",
      title: "Topper 2",
    },
    {
      category: "Leaderboard",
      src: "/images/Leaderboard/leaderboard_3.png",
      title: "Topper 3",
    },
    {
      category: "Leaderboard",
      src: "/images/Leaderboard/leaderboard_4.png",
      title: "Topper 4",
    },
  ];

  const categories = [
    "All",
    "Achievements",
    "Activities",
    "Campus",
    "Events",
    "Sports",
    "Leaderboard",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const majorAchievements = [
    {
      icon: FaTrophy,
      title: "Best Principal Award",
      description: "Top 1000 Schools out of 15 Lakh Schools",
      subtitle: "Indian Talent Olympiad Recognition",
      image:
        "/images/achievements/WhatsApp_Image_2025-12-02_at_18.32.52-e978874f-94e5-4cda-a7c9-56bd65e6cdd6.png",
      color: "from-yellow-400 to-yellow-600",
      stats: "Principal: Preeti Shrivastava",
    },
    {
      icon: FaMedal,
      title: "18 Gold Medals 🥇",
      description: "5 in a Single Year",
      subtitle: "SOF International Olympiad",
      color: "from-blue-400 to-blue-600",
      stats: "English: 12 | Science: 09 | Math: 17",
    },
    {
      icon: FaStar,
      title: "8 Black Belts 🥋",
      description: "3 in a Single Year",
      subtitle: "Okinawa Shorin-Ryu Karate",
      color: "from-red-400 to-red-600",
      stats: "Exceptional Discipline & Skill",
    },
    {
      icon: FaAward,
      title: "28 Sports Medals 🎖️",
      description: "12 in a Single Year",
      subtitle: "District & State Level Games",
      color: "from-green-400 to-green-600",
      stats: "68th District Level Champion",
    },
  ];

  const boardResults = [
    {
      title: "Class 10 Results",
      percentage: "Passed 100%",
      students: "Elite",
      description: "Exceptional board performance",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      title: "Doctors (MBBS)",
      percentage: "Every Year",
      students: "7-8",
      description: "Students entering medical fields",
      color: "bg-gradient-to-br from-red-500 to-red-700",
    },
    {
      title: "Engineers (IIT/NIT)",
      percentage: "Annually",
      students: "3-5",
      description: "Students entering engineering",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <FaTrophy className="text-4xl md:text-6xl text-yellow-500 animate-bounce mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Recognized In Top 1000 Schools by Indian Talent Olympiad
          </p>
        </div>

        {/* Best Principal Award Highlight */}
        <div
          ref={awardRef}
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 ${
            awardVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl md:rounded-3xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content - Left Side */}
                <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                    <FaTrophy className="text-4xl text-yellow-500" />
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                        🏆 Prestigious Honour
                      </h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-lg mt-1">
                        Indian Talent Olympiad
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    <strong>Principal Preeti Shrivastava</strong> has been
                    honored with the <strong>Best Principal Award</strong>,
                    selected from the{" "}
                    <strong className="text-primary-600 dark:text-accent-400">
                      In top 1000 schools out of 15 lakh schools
                    </strong>{" "}
                    across India - a lifetime achievement recognizing
                    exceptional leadership and contribution to education.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 px-5 py-3 rounded-full">
                      <span className="text-yellow-800 dark:text-yellow-300 font-semibold text-lg">
                        🎯 Top 1000/15 Lakh
                      </span>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-5 py-3 rounded-full">
                      <span className="text-blue-800 dark:text-blue-300 font-semibold text-lg">
                        🏅 Lifetime Achievement
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile - Right Side */}
                <div className="order-1 md:order-2 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl bg-white p-1">
                      <img
                        src="/images/Members/principal.svg"
                        alt="Principal Preeti Shrivastava"
                        className="w-full h-full object-cover object-top rounded-full scale-110"
                        style={{ objectPosition: "center 20%" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <FaTrophy className="text-2xl md:text-3xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                      Principal Preeti Shrivastava
                    </h3>
                    <p className="text-yellow-600 dark:text-yellow-400 font-bold text-xl">
                      🏆 Best Principal Award Winner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Year Achievement Highlights - High Impact Row */}
        <div className="mb-16">
          <h3
            className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-all duration-700 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Major Milestones 🏆
          </h3>
        </div>

        {/* Major Achievements Grid (Existing) */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {majorAchievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity`}
              ></div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-primary-600 dark:text-accent-400 font-bold mb-1">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Icon - Right Side */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <achievement.icon className="text-2xl md:text-3xl text-white" />
                  </div>
                </div>

                <div className="mt-auto">
                  {/* Stats */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {achievement.stats}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 dark:group-hover:border-accent-400 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Board Results */}
        <div ref={resultsRef} className="max-w-5xl mx-auto mb-16">
          <h3
            className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-all duration-700 ${
              resultsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            🎓 Glorious Board Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {boardResults.map((result, index) => (
              <div
                key={index}
                className={`${result.color} rounded-2xl p-8 text-white text-center shadow-xl card-hover transition-all duration-700 ${
                  resultsVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: resultsVisible
                    ? `${200 + index * 150}ms`
                    : "0ms",
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 break-words px-1 leading-tight tracking-tight">
                  {result.students}
                </div>
                <div className="text-2xl font-semibold mb-2">
                  {result.title}
                </div>
                <div className="text-lg opacity-90 mb-2">
                  {result.percentage}
                </div>
                <div className="text-sm opacity-80">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Gallery */}
        <div ref={galleryRef} className="max-w-6xl mx-auto">
          <h3
            className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-all duration-700 ${
              galleryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            📸 Award Gallery
          </h3>

          {/* Folders Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {categories
              .filter((c) => c !== "All")
              .map((category, index) => {
                const categoryImages = galleryData.filter(
                  (img) => img.category === category,
                );
                const firstImage =
                  categoryImages[0]?.src || "/images/school-building.png";

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                      galleryVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => {
                      setActiveCategory(category);
                      setTimeout(() => openLightbox(0), 0);
                    }}
                  >
                    <div className="h-40 md:h-48 relative">
                      <img
                        src={firstImage}
                        alt={category}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                        <h4 className="font-bold text-lg text-center">
                          {category}
                        </h4>
                        <p className="text-xs opacity-80 mt-1">
                          {categoryImages.length} Photos
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl md:text-4xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-2 md:left-8 text-white text-3xl md:text-5xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 md:right-8 text-white text-3xl md:text-5xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            {/* Image Container */}
            <div
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-12 text-white animate-scale-in shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Award-Winning School!
          </h3>
          <p className="text-xl mb-6 text-gray-100">
            Be part of a school recognized among India's best
          </p>
          <Link
            to="/admissions"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            Apply for Admission 2026-27
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
