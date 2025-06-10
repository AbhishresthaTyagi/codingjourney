import React from "react";
import "./cssFiles/testimonial.css"; // Import the custom CSS

//  <div
//               key={index}
//               className="bg-white dark:bg-gray-800 shadow p-6 rounded-xl"
//             >
//               <p className="text-gray-700 dark:text-gray-300 italic">"{t.text}"</p>
//               <h4 className="mt-4 font-bold text-blue-600 dark:text-blue-400">– {t.name}</h4>
//             </div>

const testimonials = [
  {
    text: "This platform helped me land an internship. The learning path is superb!",
    name: "Kartik Tyagi",
  },
  {
    text: "cratead an animal activist website with the help of codingjourney",
    name: "Arjun Tyagi",
  },
  {
    text: "I learned full-stack skills and even built my own portfolio. Highly recommend!",
    name: "Rohit Sharma",
  },
  // Duplicate cards to create infinite loop illusion
  {
    text: "This platform helped me land an internship. The learning path is superb!",
    name: "Kartik Tyagi",
  },
  {
    text: "Clear videos and real-world projects made React easy for me.",
    name: "Sneha Kapoor",
  },
  {
    text: "I learned full-stack skills and even built my own portfolio. Highly recommend!",
    name: "Rohit Sharma",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          What Our Learners Say
        </h2>

        <div className="scroll-container">
          <div className="scroll-track">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card bg-white dark:bg-gray-800 shadow p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 italic">"{t.text}"</p>
                <h4 className="mt-4 font-bold text-blue-600 dark:text-blue-400">
                  – {t.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
