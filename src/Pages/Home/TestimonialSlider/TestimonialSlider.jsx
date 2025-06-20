import React, { useState } from "react";
import image1 from '../../../assets/customer-top.png'

const testimonials = [
  {
    id: 1,
    text:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
  },
  {
    id: 2,
    text:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rasel Ahamed",
    role: "CTO",
  },
  {
    id: 3,
    text:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Nasir Uddin",
    role: "CEO",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto relative">

        {/* Icon illustration */}
        <div className="flex justify-center mb-8">
          <img src={image1} alt="Customer" className="max-w-xs w-full h-auto object-contain" />
        </div>

        <h2 className="text-2xl font-semibold text-teal-900 mb-2">
         What our customers are sayings
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
         Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Slider */}
        <div className="overflow-hidden max-w-xl mx-auto relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map(({ id, text, name, role }) => (
              <div
                key={id}
                className="min-w-full bg-white rounded-lg shadow-md p-8 mx-2"
              >
                <blockquote className="text-gray-800 italic leading-relaxed mb-6">
                  “{text}”
                </blockquote>
                <div className="flex items-center justify-start gap-3 border-t border-gray-300 pt-4">
                  <div className="w-10 h-10 rounded-full bg-teal-900"></div>
                  <div className="text-left">
                    <p className="font-semibold text-teal-900">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination and Buttons below */}
        <div className="flex justify-center items-center gap-6 mt-6 max-w-xl mx-auto">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-16 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center shadow text-teal-700 font-semibold"
          >
            &lt;
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-4 h-4 rounded-full ${
                  idx === currentIndex ? "bg-lime-400" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-16 h-10 rounded-full border border-gray-300 bg-lime-400 hover:bg-lime-500 flex items-center justify-center shadow text-white font-semibold"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
