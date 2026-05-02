import React from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaMapMarkerAlt, FaShieldAlt, FaClock, FaPhone } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TransportPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Safe & Secure',
      description: 'GPS-enabled buses with trained attendants. Safety is our top priority for every student.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Wide Coverage',
      description: 'Routes covering major areas in Bhankrota, Jaipur and surrounding localities.',
    },
    {
      icon: FaClock,
      title: 'Punctual Service',
      description: 'Reliable pick-up and drop timings so students reach school on time every day.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-6 md:py-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 40% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div ref={headerRef} className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <FaBus className="text-6xl md:text-7xl text-sky-300 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Safe <span className="text-sky-300">Transport</span> Facility
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Reliable bus transportation for students. GPS-tracked vehicles with trained staff for a safe journey to and from school.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-sky-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-sky-300 transition-all shadow-lg"
              >
                Enquire About Routes
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div ref={featuresRef} className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <item.icon className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">For route details, timings and availability, please contact us.</p>
            <a href="tel:+918947097731" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition-all">
              <FaPhone /> +91 8947097731
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPage;
