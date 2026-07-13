import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities", href: "/facilities" },
  ];

  const importantLinks = [
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=100057339584443",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500/20",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/",
      color: "hover:bg-red-600",
      bgColor: "bg-red-500/20",
      label: "YouTube",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/",
      color:
        "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      bgColor:
        "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500/20",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/",
      color: "hover:bg-sky-500",
      bgColor: "bg-sky-500/20",
      label: "Twitter",
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Adarsh Children's Senior Secondary School Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Adarsh Children's Senior Secondary School
                </h3>
                <p className="text-xs text-gray-500">Since 2012</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Quality education at Bhankrota. Nurturing young minds with values,
              excellence, and holistic development.
            </p>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 font-semibold">Follow Us:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className={`relative w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center ${social.color} text-white transition-all transform hover:scale-110 shadow-lg hover:shadow-xl`}
                    >
                      <social.icon className="text-xl" />
                      {social.badge && (
                        <span className="absolute -bottom-1 -right-1 text-[8px] font-bold bg-gray-900 text-white px-1.5 py-0.5 rounded-full border border-gray-700">
                          {social.badge}
                        </span>
                      )}
                    </a>
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mr-1"></span>
                  Adarsh Children's Sr. Sec. School
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-lg font-bold mb-4 text-accent-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-lg font-bold mb-4 text-accent-300">
              Important Links
            </h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="text-lg font-bold mb-6 text-accent-300">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 text-base flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  <p className="font-semibold text-white mb-1">Our Location:</p>
                  <p className="leading-relaxed">
                    Adarsh Children's Sr. Sec. School, Near Radhika Marriage
                    Garden, Bhankrota, Rajasthan - 302026
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Adarsh+childrens+sr.+Sec.+School/@26.8758898,75.6873726,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4b10414390ef:0xba16854dc4280343!8m2!3d26.8758898!4d75.6873726!16s%2Fg%2F11t6yp80w_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-white transition-colors mt-2 inline-block font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-accent-400 text-base flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+918947097731"
                  className="text-gray-400 hover:text-white transition text-sm leading-relaxed"
                >
                  +91-8947097731
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-accent-400 text-base flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hemrajbhiwal@gmail.com"
                  className="text-gray-400 hover:text-white transition text-sm break-all leading-relaxed"
                >
                  hemrajbhiwal@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Adarsh Children's Senior Secondary School. All
              rights reserved.
            </div>
            <div className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-2 animate-pulse" />{" "}
              for Education
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all z-40 pulse-glow animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}

      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
