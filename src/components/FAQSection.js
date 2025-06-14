import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is the warranty period for your gadgets?",
    answer: "Most of our electronic gadgets come with a 1-year warranty covering manufacturing defects.",
  },
  {
    question: "Do you offer customer support after purchase?",
    answer: "Yes, we offer dedicated customer support via chat, email, and phone for all our products.",
  },
  {
    question: "Are your gadgets compatible with other devices?",
    answer: "Yes, our gadgets are designed to be compatible with most popular devices and platforms. Check individual product specs for details.",
  }

];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto my-16 px-6 sm:px-16 md:px-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left text-gray-800 text-lg sm:text-xl md:text-2xl focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-blue-600 text-lg sm:text-xl md:text-2xl">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-700 transition-all duration-300 text-base sm:text-lg md:text-xl ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
