import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteSlider from '../components/InfiniteSlider';
import { FaGraduationCap, FaFlask, FaCalculator, FaBook, FaGlobe, FaPalette, FaUsers, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FacultyPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Principal',
      qualification: 'Ph.D. in Education, M.Ed.',
      experience: '15+ Years',
      subject: 'Administration',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      icon: FaGraduationCap,
    },
    {
      name: 'Mrs. Priya Sharma',
      designation: 'Vice Principal',
      qualification: 'M.A. English, B.Ed.',
      experience: '15+ Years',
      subject: 'English & Literature',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      icon: FaBook,
    },
    {
      name: 'Mr. Amit Patel',
      designation: 'Head of Science Dept.',
      qualification: 'M.Sc. Chemistry, B.Ed.',
      experience: '12+ Years',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      icon: FaFlask,
    },
    {
      name: 'Mrs. Sunita Verma',
      designation: 'Mathematics Teacher',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '10+ Years',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      icon: FaCalculator,
    },
    {
      name: 'Mr. Vikram Singh',
      designation: 'Physics Teacher',
      qualification: 'M.Sc. Physics, B.Ed.',
      experience: '8+ Years',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      icon: FaFlask,
    },
    {
      name: 'Mrs. Anjali Gupta',
      designation: 'Social Science Teacher',
      qualification: 'M.A. History, B.Ed.',
      experience: '9+ Years',
      subject: 'Social Science',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      icon: FaGlobe,
    },
    {
      name: 'Mr. Rahul Joshi',
      designation: 'Computer Science Teacher',
      qualification: 'MCA, B.Ed.',
      experience: '7+ Years',
      subject: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
      icon: FaBook,
    },
    {
      name: 'Mrs. Kavita Meena',
      designation: 'Art Teacher',
      qualification: 'B.F.A., Diploma in Education',
      experience: '6+ Years',
      subject: 'Art & Craft',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      icon: FaPalette,
    },
  ];

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 35% 55%, white 1px, transparent 1px), radial-gradient(circle at 65% 45%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div
              ref={headerRef}
              className="text-center md:text-left"
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                Our <span className="text-fuchsia-400">Faculty</span><br />
                Excellence in Teaching
              </h1>

              <p className="text-lg md:text-xl text-violet-100 mb-6 leading-relaxed">
                Dedicated educators committed to nurturing young minds and fostering academic excellence
              </p>

              {/* Faculty Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaChalkboardTeacher className="text-2xl mx-auto mb-1 text-fuchsia-400" />
                  <div className="text-xs text-violet-200">Experienced</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaAward className="text-2xl mx-auto mb-1 text-fuchsia-400" />
                  <div className="text-xs text-violet-200">Qualified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaUsers className="text-2xl mx-auto mb-1 text-fuchsia-400" />
                  <div className="text-xs text-violet-200">Dedicated</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-fuchsia-400">30+</div>
                  <div className="text-xs text-violet-200">Teachers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-fuchsia-400">15+</div>
                  <div className="text-xs text-violet-200">Avg. Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-fuchsia-400">100%</div>
                  <div className="text-xs text-violet-200">Qualified</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#faculty-list"
                  className="bg-fuchsia-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  👨‍🏫 Meet Our Teachers
                </a>
                <Link
                  to="/contact"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  Join Our Team
                </Link>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/campus.jpg"
                    alt="Teaching Excellence"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/students.jpg"
                    alt="Classroom"
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/activities.jpg"
                    alt="Students Learning"
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/events.jpg"
                    alt="School Staff"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-fuchsia-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>🎓 Expert Educators</span>
              <span className="hidden sm:inline">•</span>
              <span>💡 Innovative Teaching</span>
              <span className="hidden sm:inline">•</span>
              <span>❤️ Student-Centric</span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Infinite Slider */}
      <InfiniteSlider />

      {/* Faculty Introduction */}
      <section id="faculty-list" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Experienced & Qualified Teachers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our faculty comprises highly qualified and experienced professionals who are passionate about teaching and committed to nurturing each student's potential. With expertise across various subjects and a deep understanding of modern pedagogy, our teachers create an engaging and effective learning environment.
            </p>
          </div>

          {/* Faculty Grid */}
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                      <member.icon className="text-2xl text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.designation}</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Subject:</strong> {member.subject}</p>
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Why Our Faculty is Exceptional</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">👨‍🎓 Highly Qualified</h3>
                <p className="text-gray-600">
                  All our teachers hold advanced degrees in their subjects and professional teaching qualifications. Regular training keeps them updated with the latest teaching methodologies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Student-Centric Approach</h3>
                <p className="text-gray-600">
                  Our faculty focuses on individual student needs, employing differentiated instruction techniques to ensure every child reaches their full potential.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Innovative Teaching</h3>
                <p className="text-gray-600">
                  Using modern technology and creative teaching methods, our teachers make learning engaging, interactive, and fun for students of all ages.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">❤️ Caring & Supportive</h3>
                <p className="text-gray-600">
                  Beyond academics, our teachers serve as mentors and guides, providing emotional support and fostering a positive, nurturing environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Statistics */}
      <section className="py-24 bg-gradient-to-r from-primary-900 via-primary-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-8 border-white"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border-8 border-white opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            <div className="animate-scale-in">
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-3 tracking-tighter">30+</div>
              <div className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">Qualified</div>
              <div className="text-sm text-blue-200">Educators</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-3 tracking-tighter">15+</div>
              <div className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">Years Avg.</div>
              <div className="text-sm text-blue-200">Experience</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-3 tracking-tighter">100%</div>
              <div className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">Professional</div>
              <div className="text-sm text-blue-200">Training</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-3 tracking-tighter">20+</div>
              <div className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">Support</div>
              <div className="text-sm text-blue-200">Staff</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
