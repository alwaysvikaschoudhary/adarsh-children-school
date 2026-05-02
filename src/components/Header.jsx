import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Campuses', href: '/campuses' },
        { name: 'Faculty', href: '/faculty' },
      ]
    },
    {
      name: 'Academics',
      dropdown: [
        { name: 'Admissions', href: '/admissions' },
      ]
    },
    {
      name: 'Infrastructure',
      dropdown: [
        { name: 'Facilities', href: '/facilities' },
      ]
    },
    {
      name: 'Student Life',
      dropdown: [
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const isRouteActive = (item) => {
    if (item.href && location.pathname === item.href) return true;
    if (item.dropdown) {
      return item.dropdown.some(sub => location.pathname === sub.href);
    }
    return false;
  };

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
      {/* Main Navigation */}
      <nav className="w-full px-4 py-3 md:py-4 relative z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group min-w-0 lg:w-[25%] xl:w-auto">
            <img
              src="/logo.png"
              alt="Adarsh Children's School Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:rotate-6 transition-transform flex-shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <h1 className="text-[12px] md:text-[14px] xl:text-base font-bold text-primary-900 leading-tight">
                Adarsh Children's Sr. Sec. School
              </h1>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-medium tracking-wide uppercase">Since 2012</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className={`flex items-center cursor-pointer text-[13px] xl:text-[15px] font-semibold px-2 py-2 rounded-lg transition-all ${isRouteActive(item) ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'}`}>
                    {item.name}
                    <FaChevronDown className="ml-1 text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-2 z-50 py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 text-[13px] font-medium transition-colors ${location.pathname === subItem.href ? 'text-primary-600 bg-primary-50/50' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-[13px] xl:text-[15px] font-semibold px-2 py-2 rounded-lg transition-all whitespace-nowrap ${location.pathname === item.href
                      ? 'text-primary-700'
                      : 'text-gray-700 hover:text-primary-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center justify-end lg:w-[20%] xl:w-auto">
            <Link
              to="/admissions"
              className="ml-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-xl text-[13px] font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all whitespace-nowrap"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <Link
              to="/admissions"
              className="text-[10px] font-bold bg-primary-600 text-white px-3 py-2 rounded-lg uppercase tracking-tight"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
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
                <span className="font-bold text-primary-800 text-sm">ACS Jaipur</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 last:border-0 pb-1">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex items-center justify-between w-full px-3 py-3 rounded-xl font-semibold transition-all ${isRouteActive(item) ? 'text-primary-700 bg-primary-50/30' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                          {item.name}
                          <FaChevronDown className={`text-[10px] transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
                        </button>
                        
                        {/* Mobile Accordion Content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.name ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-6 pr-3 py-1 space-y-1 border-l-2 border-primary-100 ml-4 mb-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={handleNavClick}
                                className={`block w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${location.pathname === subItem.href
                                  ? 'text-primary-600 bg-primary-50/80'
                                  : 'text-gray-600 hover:bg-gray-50'
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={handleNavClick}
                        className={`flex items-center w-full px-3 py-3 rounded-xl font-semibold transition-all ${location.pathname === item.href
                          ? 'bg-primary-50 text-primary-600 shadow-sm'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
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
    </header>
  );
};

export default Header;
