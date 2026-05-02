import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { initEmailJS } from './services/emailService';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CampusesPage from './pages/CampusesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';
import TransportPage from './pages/TransportPage';
import AchievementsPage from './pages/AchievementsPage';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    // Initialize EmailJS when app loads
    initEmailJS();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">

        <Header />
        <main id="main-content" className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/campuses" element={<CampusesPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/transport" element={<TransportPage />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
