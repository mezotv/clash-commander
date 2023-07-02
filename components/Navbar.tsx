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
              <img
                src="/clash_commander.png"
                alt="Logo"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <h1 className="text-lg font-bold sm:text-xl md:text-2xl text-center">
                <Link href="/">Clash Commander</Link>
              </h1>
            </div>
            <div className="hidden lg:flex lg:items-center">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={100}
                    className="text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <Link
                    href="/commands"
                    className="text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Commands
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <button
                className="flex items-center justify-center p-2 rounded-md text-pink-600 hover:bg-pink-200 focus:outline-none"
                onClick={toggleNav}
              >
                {isNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
            {isNavOpen && (
              <ul className="lg:hidden">
                <li>
                  <Link
                    href="/"
                    className="block text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={100}
                    className="block text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <Link
                    href="/commands"
                    className="block text-white font-bold text-sm sm:text-base md:text-lg hover:text-pink-800 transition-colors duration-300"
                    onClick={handleMenuItemClick}
                  >
                    Commands
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </motion.nav>
    </LazyMotion>
  );
};

export default Navbar;
