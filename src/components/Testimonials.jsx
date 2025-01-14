import React, { useState } from "react";

const testimonials = [
  {
    name: "Eng Sego Jio",
    title: "Chairman, Jio Building Consultations",
    feedback: "Maxonex System's web design and development skills have significantly enhanced our online presence, making it more engaging and accessible for our clients.",
  },
  {
    name: "Michael Jay",
    title: "Chief Editor, Newstropy",
    feedback: "Maxonex System's graphic design work has brought a fresh and modern look to our publication, attracting more readers and improving our overall aesthetic.",
  },

  {
    name: "Abdulrokeeb Ibrahim",
    title: "Founder, MRA Electrical Sercvices",
    feedback: "Maxonex System's creative graphic design solutions have given our brand a unique and professional appearance, setting us apart from the competition.",
  },
  {
    name: "Kimberly Dan",
    title: "Founder, Pixel Tech",
    feedback: "Maxonex System's web design and development services have been invaluable in establishing a strong digital presence for our business.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-lg underline"> Client Testimonials</h2>

        <div className="bg-purple-950 p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-400 italic mb-4">"{testimonials[currentIndex].feedback}"</p>
          <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
          <p className="text-gray-500">{testimonials[currentIndex].title}</p>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
