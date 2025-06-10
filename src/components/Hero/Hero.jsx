import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fallingLetter = {
  hidden: { y: -100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const Hero = () => {
  const navigate = useNavigate();
  const heading = "Accelerate Your Learning with Expert-Led Courses";

  return (
    <section className="bg-gray-800 py-24 text-white">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight flex flex-wrap justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {heading.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={fallingLetter}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="mt-10 text-lg max-w-xl mx-auto text-gray-300">
          Join thousands of students mastering new skills and advancing their careers.
        </p>

        <motion.button
          onClick={() => navigate("/app/Courses")}
          className="inline-block mt-10 px-12 py-4 rounded-full font-semibold text-white shadow-lg cursor-pointer select-none
            bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-400
            bg-[length:400%_400%] bg-[position:0%_50%] relative overflow-hidden"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradientMove 10s ease infinite",
          }}
          whileHover={{
            scale: 1.07,
            boxShadow:
              "0 0 20px rgba(225, 0, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Explore Courses
        </motion.button>
      </div>

      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
