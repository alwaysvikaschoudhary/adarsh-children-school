import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the admission procedure?",
      answer:
        "The admission process is simple: Visit our campus, fill out the application form, submit required documents (birth certificate, previous school records, ID proof), and complete the registration. Admissions are open throughout the year based on seat availability.",
    },
    {
      question: "What are the school timings?",
      answer:
        "School timings are from 8:00 AM to 2:00 PM for all classes. We also offer extended care programs for working parents.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "We follow the RBSE (Rajasthan Board of Secondary Education) curriculum, focusing on holistic development with equal emphasis on academics, sports, and co-curricular activities.",
    },
    {
      question: "What are the transport facilities available?",
      answer:
        "We provide safe and reliable bus transportation covering major areas around Bhankrota and Jaipur. Our buses are equipped with GPS tracking and trained attendants for student safety.",
    },
    {
      question: "What extra-curricular activities are offered?",
      answer:
        "We offer a wide range of activities including Karate (with Black Belt training), Sports (Cricket, Football, Athletics), Cultural Programs, Music, Dance, Art & Craft, Science Club, and participation in various Olympiads.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain a healthy student-teacher ratio of approximately 25:1 to ensure personalized attention and quality education for every student.",
    },
    {
      question: "Are there scholarship programs available?",
      answer:
        "Yes, we offer merit-based scholarships for students who excel in academics and sports. We also have financial assistance programs for deserving students.",
    },
    {
      question: "How can I track my child's progress?",
      answer:
        "We have regular parent-teacher meetings, monthly progress reports, and an online portal where parents can track attendance, assignments, and academic performance. We maintain open communication with parents.",
    },
    {
      question: "What are the safety measures in place?",
      answer:
        "Student safety is our top priority. We have CCTV surveillance, trained security personnel, fire safety equipment, first aid facilities, and comprehensive emergency protocols. All staff undergo background verification.",
    },
    {
      question: "How many campus do you have?",
      answer:
        "We have two campus: Main Campus at Bhankrota and Adarsh Children's Early Years at Jaipur (Bhankrota). Both campus offer modern facilities and quality education.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
          <div className="inline-block mb-4">
            <FaQuestionCircle className="text-6xl text-primary-600 dark:text-accent-400 animate-bounce mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know
            about our school.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: headerVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-primary-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900"
                    }`}
                  >
                    {openIndex === index ? (
                      <FaMinus className="text-sm" />
                    ) : (
                      <FaPlus className="text-sm" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-100 mb-6">
              We're here to help! Contact us and we'll get back to you as soon
              as possible.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
