import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import { sendContactMessage, sendWhatsAppNotification } from '../services/emailService';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [infoCardsRef, infoCardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.1 });
  const [mapsRef, mapsVisible] = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendMethod, setSendMethod] = useState('email');

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+918947097731', 'Available: Mon-Sat, 8 AM - 4 PM'],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      link: 'tel:+918947097731',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['adarshchildrenschool@gmail.com'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      link: 'mailto:adarshchildrenschool@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Main Campus',
      details: ['Near Radhika Marriage Garden, Bhankrota, Rajasthan 302026'],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      link: 'https://www.google.com/maps/place/Adarsh+childrens+sr.+Sec.+School/@26.8758898,75.6873726,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4b10414390ef:0xba16854dc4280343!8m2!3d26.8758898!4d75.6873726!16s%2Fg%2F11t6yp80w_',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: FaTwitter, url: '#', color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600', label: 'Instagram' },
    { icon: FaYoutube, url: '#', color: 'hover:bg-red-600', label: 'YouTube' },
    { icon: FaWhatsapp, url: '#', color: 'hover:bg-green-600', label: 'WhatsApp' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (sendMethod === 'whatsapp') {
        sendWhatsAppNotification(formData, 'contact');
        setSubmitted(true);
      } else {
        await sendContactMessage(formData);
        setSubmitted(true);
      }

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try WhatsApp option or call us directly at +918947097731');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          ref={infoCardsRef}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`bg-white p-8 rounded-2xl shadow-lg text-center card-hover block border-b-4 ${info.color.replace('text-', 'border-')} transition-all duration-700 ${infoCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              style={{
                transitionDelay: infoCardsVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className={`w-20 h-20 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                <info.icon className={`text-4xl ${info.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 font-medium">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>

        {/* Contact Form and Map */}
        {/* Full Screen Map */}
        <div
          ref={mapsRef}
          className={`transition-all duration-1000 delay-300 max-w-6xl mx-auto ${mapsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 px-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Find Us Here</h3>
                <h4 className="font-bold text-primary-700">Adarsh Children's Senior Secondary School</h4>
                <p className="text-gray-600">Near Radhika Marriage Garden, Bhankrota, Rajasthan 302026</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Adarsh+childrens+sr.+Sec.+School/@26.8758898,75.6873726,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4b10414390ef:0xba16854dc4280343!8m2!3d26.8758898!4d75.6873726!16s%2Fg%2F11t6yp80w_"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <FaMapMarkerAlt />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.878533235344!2d75.687156!3d26.8756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b10414390ef%3A0xba16854dc4280343!2sAdarsh%20childrens%20sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1777742884742!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adarsh Children's Senior Secondary School Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Campus</h3>
          <p className="mb-6 text-blue-100">We welcome parents and students to visit us and experience our learning environment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+918947097731" className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              <FaPhone />
              <span>Call: +918947097731</span>
            </a>
            <a
              href="https://wa.me/918947097731?text=Hello!%20I%20want%20to%20visit%20Shree%20Krishna%20Public%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
