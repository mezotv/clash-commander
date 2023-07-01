/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMenuItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.nav
        className={`navbar fixed top-0 left-0 right-0 z-50 bg-transparent text-white`}
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: "#040104", color: "#ffffff" }}
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
                {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
            <ul className="hidden lg:flex lg:items-center space-x-6">
              <motion.li
                className=""
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                 <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="block text-white font-bold hover:text-pink-800 transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                  Home
                </ScrollLink>
              </motion.li>
              <motion.li
                className="mr-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className="font-bold text-white hover:text-pink-800 transition-colors duration-300"
                  onClick={handleMenuItemClick}
                >
                  Features
                </ScrollLink>
              </motion.li>
              <motion.li
                className="mr-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/commands"
                  className="font-bold text-white hover:text-pink-800 transition-colors duration-300"
                >
                  Commands
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
        <ul
          className={`${
            isNavOpen ? "fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75" : "hidden"
          }`}
          onClick={() => {
            setIsNavOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="container mx-auto px-4 py-3 space-y-8 items-center">
            <motion.li
              className="mr-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
               <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="block text-white font-bold text-2xl hover:text-pink-800 transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                Home
              </ScrollLink>
            </motion.li>
            <motion.li
              className="mr-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="block text-white font-bold text-2xl hover:text-pink-800 transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                Features
              </ScrollLink>
            </motion.li>
            <motion.li
              className="mr-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/commands"
                className="block text-white font-bold text-2xl hover:text-pink-800 transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                Commands
              </Link>
            </motion.li>
          </div>
        </ul>
      </motion.nav>
    </LazyMotion>
  );
};

export default Navbar;
