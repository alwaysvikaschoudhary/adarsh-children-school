import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

const campus = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [campusRef, campusVisible] = useScrollAnimation({ threshold: 0.1 });
  const campus = [
    {
      name: "Adarsh Children's Senior Secondary School",
      tagline: "Main Campus",
      description:
        "Our flagship campus offering comprehensive education from primary to senior secondary levels with state-of-the-art facilities and experienced faculty.",
      address: "Near Radhika Marriage Garden, Bhankrota, Rajasthan 302026",
      phone: "+918947097731",
      pincode: "302026",
      googleId: "Near Radhika Marriage Garden",
      image: "/images/Campus/campus_1.jpg",
      gradient: "from-blue-600 to-blue-800",
      features: [
        "Classes 1-12",
        "RBSE Affiliated",
        "Science & Computer Labs",
        "Sports Complex",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.878533235344!2d75.687156!3d26.8756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b10414390ef%3A0xba16854dc4280343!2sAdarsh%20childrens%20sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1777742884742!5m2!1sen!2sin",
      directionsUrl:
        "https://www.google.com/maps/place/Adarsh+childrens+sr.+Sec.+School/@26.8758898,75.6873726,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4b10414390ef:0xba16854dc4280343!8m2!3d26.8758898!4d75.6873726!16s%2Fg%2F11t6yp80w_",
    },
  ];

  return (
    <section id="campus" className="py-20 bg-gray-50 overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Our <span className="gradient-text">campus</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            World-class campus designed to provide the best learning
            environment for every age group
          </p>
        </div>

        {/* campus */}
        <div ref={campusRef} className="space-y-16">
          {campus.map((campus, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative animate-slide-in-${index % 2 === 0 ? "left" : "right"} ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-56 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${campus.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}
                  ></div>

                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                    <FaGraduationCap className="text-primary-600" />
                    <span className="font-semibold text-gray-800">
                      {campus.tagline}
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-${index % 2 === 0 ? "primary" : "accent"} rounded-full blur-3xl opacity-20`}
                ></div>
              </div>

              {/* Content Section */}
              <div
                className={`animate-slide-in-${index % 2 === 0 ? "right" : "left"} ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  {/* Campus Logo & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src="/logo.png"
                      alt="School Logo"
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {campus.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {campus.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {campus.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {campus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 mb-6">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700">{campus.address}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-primary-600 flex-shrink-0" />
                      <a
                        href={`tel:${campus.phone}`}
                        className="text-gray-700 hover:text-primary-600"
                      >
                        {campus.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaClock className="text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        Mon - Sat: 8:00 AM - 2:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      Schedule Visit
                    </Link>
                    <a
                      href={campus.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all text-center"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default campus;
