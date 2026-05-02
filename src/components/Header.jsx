import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Campuses', href: '/campuses' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Main Navigation - Improved Design */}
      <header
        className={`w-full transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2'
          : 'bg-transparent py-4 md:py-6'
          }`}
      >
        <nav className="w-full px-4 max-w-7xl mx-auto overflow-hidden">
          <div className={`transition-all duration-300 ${isScrolled
            ? 'bg-transparent border-transparent'
            : 'bg-white/95 backdrop-blur-xl shadow-2xl border-white/50'
            } rounded-2xl md:rounded-3xl px-3 md:px-6 py-2 border mx-auto max-w-7xl`}>
            {/* Desktop Layout - Grid (lg+) */}
            <div className="hidden lg:grid grid-cols-3 items-center gap-2">
              {/* Left: Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                  <img
                    src="/logo.png"
                    alt="Adarsh Children's Senior Secondary School Logo"
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform flex-shrink-0"
                  />
                  <div>
                    <h1 className="text-base font-bold text-primary-800 leading-tight whitespace-nowrap">
                      Adarsh Children's Sr. Sec. School
                    </h1>
                    <p className="text-[9px] text-gray-700 font-medium leading-none">Since 2012</p>
                  </div>
                </Link>
              </div>

              {/* Center: Desktop Navigation */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {navItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm text-gray-800 hover:text-primary-600 font-medium transition-colors px-2.5 py-2 rounded-xl whitespace-nowrap ${location.pathname === item.href ? 'bg-white text-primary-600 shadow-sm' : 'hover:bg-white/50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex items-center justify-end">
                <Link
                  to="/admissions"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Mobile/Tablet Layout (up to lg) */}
            <div className="flex lg:hidden items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  src="/logo.png"
                  alt="Adarsh Children's Senior Secondary School Logo"
                  className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform flex-shrink-0"
                />
                <div className="min-w-0">
                  <h1 className="text-[11px] md:text-sm font-bold text-primary-800 leading-tight truncate">
                    Adarsh Children's Senior Secondary School
                  </h1>
                  <p className="text-[8px] md:text-[10px] text-gray-700 leading-none">Since 2012</p>
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-600 hover:text-primary-800 focus:outline-none bg-white rounded-xl p-2 shadow-sm border border-gray-100 flex-shrink-0"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            </div>

            {/* Secondary Navigation Row (Desktop Only) */}
            <div className="hidden lg:flex items-center justify-center mt-2 pt-2 border-t border-gray-200/50">
              <div className="flex items-center space-x-1">
                {navItems.slice(5).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-[10px] xl:text-xs text-gray-700 hover:text-primary-600 font-medium transition-colors px-2 py-1 rounded-lg ${location.pathname === item.href ? 'bg-white text-primary-600 shadow-sm' : 'hover:bg-white/50'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-3 text-[10px] xl:text-xs ml-4 pl-4 border-l border-gray-300">
                  <a href="tel:+918947097731" className="flex items-center text-gray-700 hover:text-primary-600 transition whitespace-nowrap">
                    <FaPhone className="mr-1.5" /> +918947097731
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Drawer - Side Drawer for Breadth */}
          <div
            className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'
              }`}
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
              className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="font-bold text-primary-800 text-sm">SKPS Jaipur</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex-1 overflow-y-auto py-4 px-2">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleNavClick}
                        className={`flex items-center w-full px-4 py-3 rounded-xl font-semibold transition-all ${location.pathname === item.href
                          ? 'bg-primary-50 text-primary-600 shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA & Contact */}
                <div className="p-4 border-t border-gray-100 space-y-4">
                  <Link
                    to="/admissions"
                    onClick={handleNavClick}
                    className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3.5 rounded-xl font-bold text-center shadow-lg active:scale-[0.98] transition-transform"
                  >
                    🚀 Apply Admission 2026
                  </Link>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href="tel:+918947097731"
                      className="flex items-center justify-center text-gray-600 text-xs font-semibold py-2.5 px-4 rounded-xl bg-gray-50"
                    >
                      <FaPhone className="mr-2 text-primary-500" /> +918947097731
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
