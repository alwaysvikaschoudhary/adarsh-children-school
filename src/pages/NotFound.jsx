import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8 animate-bounce">
          <FaExclamationTriangle className="text-yellow-400 text-8xl mx-auto mb-4" />
          <h1 className="text-9xl font-black text-white mb-4">404</h1>
        </div>

        {/* Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-200 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <FaHome className="text-xl group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
          >
            <FaPhone className="text-xl group-hover:scale-110 transition-transform" />
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12">
          <p className="text-gray-300 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <span className="text-white/50">•</span>
            <Link to="/admissions" className="text-white hover:text-yellow-400 transition-colors">Admissions</Link>
            <span className="text-white/50">•</span>
            <Link to="/gallery" className="text-white hover:text-yellow-400 transition-colors">Gallery</Link>
            <span className="text-white/50">•</span>
            <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
