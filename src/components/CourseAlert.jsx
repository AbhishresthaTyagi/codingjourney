import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CourseAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowAlert(true), 3000); // show after 3s
    const hideTimer = setTimeout(() => setShowAlert(false), 8000); // auto-close after 5s

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => setShowAlert(false);

  return (
    <AnimatePresence>
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <motion.div
            drag
            dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-white via-gray-50 to-white p-6 w-[90%] max-w-md rounded-2xl shadow-2xl text-center border-t-4 border-primary cursor-grab active:cursor-grabbing font-poppins"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl">📢</div>

              {/* Move this up */}
              <h3 className="text-lg font-bold text-gray-800 leading-tight mt-1">
                New Course Just Dropped!
              </h3>

              {/* Show course name below */}
              <h2 className="text-2xl font-extrabold text-blue-600 tracking-wide">
                ReactJS Bootcamp
              </h2>

              <p className="text-gray-600 mt-2 text-sm px-2">
                Learn ReactJS from scratch with real-world projects and certification.
              </p>

              <a
                href="/app/Courses"
                className="mt-4 px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-yellow-500 transition"
              >
                Enroll Now
              </a>

              <button
                onClick={handleClose}
                className="mt-3 text-sm text-dark2 hover:text-red-500 transition"
              >
                or dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseAlert;
