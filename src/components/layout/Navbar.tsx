import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LuShoppingCart } from "react-icons/lu";
import { motion, useAnimation } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const controls = useAnimation();

  const cartItems = useSelector((state: RootState) => state?.cart?.items ?? []);
  const cartItemCount = cartItems.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    controls.start(
      isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
    );
  }, [isOpen, controls]);

  const navLinks = (
    <>
      <Link
        to="/"
        className={`block ${
          location.pathname === "/"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/products"
        className={`block ${
          location.pathname === "/products"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Products
      </Link>
      <Link
        to="/about"
        className={`block ${
          location.pathname === "/about"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`block ${
          location.pathname === "/contact"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Contact
      </Link>
      <Link
        to="/dashboard"
        className={`block ${
          location.pathname === "/dashboard"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
        onClick={closeMenu}
      >
        Dashboard
      </Link>
    </>
  );

  return (
    <nav className="bg-white border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src={logo} className="h-8 me-3" alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 ml-10">{navLinks}</div>
          </div>
          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative text-gray-500 hover:text-gray-900"
            >
              <LuShoppingCart size={28} />
              <span className="absolute -top-1 -right-1 bg-[#ED4347] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            </Link>
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={`fixed top-16 left-0 w-full bg-white border-t shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks}</div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
