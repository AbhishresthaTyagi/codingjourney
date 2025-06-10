import React, { useState } from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";
import { FaUsers, FaGoogle, FaFacebookF } from "react-icons/fa";

const Banner2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const Modal = ({ children, onClose }) => (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 p-8 rounded-lg max-w-md w-full text-white shadow-lg"
      >
        {children}
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-900 py-20 md:py-28 text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-6 md:px-0">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg space-y-8 md:pl-12"
        >
          <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
            Empower Your Learning Journey <br />
            with Our Thriving Community
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Collaborate, learn, and grow with motivated individuals. Unlock access to curated resources, engaging discussions, and supportive peers.
          </p>

          <motion.button
            onClick={() => {
              setModalOpen(true);
              setIsSignup(true);
              setSubmitted(false);
            }}
            className="inline-flex items-center justify-center space-x-3 px-10 py-2.5 rounded-full font-semibold text-white shadow-lg cursor-pointer select-none 
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
            <FaUsers className="text-white text-xl" />
            <RotatingText
              fixedText=""
              texts={["Sign-Up", "Sign-In", "Join-Us"]}
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={2500}
              mainClassName="text-white"
            />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={BannerPng}
          alt="Join Community Illustration"
          className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Auth Modal */}
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {submitted ? (
            <div className="text-center p-6 bg-blue-700 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-4">Thank You for Joining Us!</h3>
              <p className="mb-6">We’re excited to have you in our community.</p>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-white text-gray-900 font-semibold px-6 py-2 rounded hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-6">
                <button
                  onClick={() => {
                    setIsSignup(true);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 rounded-l-full font-semibold ${
                    isSignup
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setIsSignup(false);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 rounded-r-full font-semibold ${
                    !isSignup
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  }`}
                >
                  Login
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className={`w-full py-2 rounded font-semibold ${
                    isSignup
                      ? "bg-cyan-500 hover:bg-cyan-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {isSignup ? "Register" : "Login"}
                </button>
              </form>

              <div className="mt-6 text-center space-y-3">
                <p className="text-gray-400">Or continue with</p>
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={() => alert("Google login clicked")}
                    className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white"
                    aria-label="Login with Google"
                  >
                    <FaGoogle size={20} />
                  </button>
                  <button
                    onClick={() => alert("Facebook login clicked")}
                    className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white"
                    aria-label="Login with Facebook"
                  >
                    <FaFacebookF size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </Modal>
      )}
    </section>
  );
};

export default Banner2;
