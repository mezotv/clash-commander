import { useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        className={`navbar fixed top-0 left-0 right-0 z-50 bg-transparent text-white`}
        initial={{ backgroundColor: "transparent" }}
        animate={{  color: "#ffffff" }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/clash_commander.png" alt="Logo" className="w-8 h-8 mr-2 rounded-full" />
              <h1 className="text-lg font-bold">Clash Commander</h1>
            </div>
            <div className="lg:hidden">
              <button
                className="flex items-center justify-center p-2 rounded-md text-pink-600 hover:bg-pink-200 focus:outline-none"
                onClick={toggleNav}
              >
                <FiMenu size={24} />
              </button>
            </div>
            <ul
              className={`${
                isNavOpen ? "block" : "hidden"
              } lg:flex lg:items-center w-full lg:w-auto`}
            >
              <li className="mr-4">
                <a
                  href="#home"
                  className="block text-white font-bold hover:text-pink-800 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#about"
                  className="block font-bold text-white hover:text-pink-800 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#features"
                  className="block font-bold text-white hover:text-pink-800 transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block font-bold text-white hover:text-pink-800 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </LazyMotion>
  );
};

export default Navbar;
