import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import InfiniteSlider from '../components/InfiniteSlider';


// Lazy load below-the-fold components
const About = lazy(() => import('../components/About'));
const Campuses = lazy(() => import('../components/Campuses'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Achievements = lazy(() => import('../components/Achievements'));
const FAQ = lazy(() => import('../components/FAQ'));

const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

const Home = () => {


  return (
    <div>
      <Hero />

      {/* Infinite Slider */}
      <InfiniteSlider />


      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Campuses />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
    </div>
  );
};

export default Home;
