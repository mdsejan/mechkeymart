import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

const Navbar: React.FC<{ cartItemCount: number }> = ({ cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className={`${isOpen ? "block" : ""} ${
          location.pathname === "/"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
      >
        Home
      </Link>
      <Link
        to="/products"
        className={`${isOpen ? "block" : ""} ${
          location.pathname === "/products"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
      >
        Products
      </Link>
      <Link
        to="/about"
        className={`${isOpen ? "block" : ""} ${
          location.pathname === "/about"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={`${isOpen ? "block" : ""} ${
          location.pathname === "/contact"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
      >
        Contact Us
      </Link>
      <Link
        to="/dashboard"
        className={`${isOpen ? "block" : ""} ${
          location.pathname === "/dashboard"
            ? "text-blue-500 font-bold"
            : "text-gray-500"
        } hover:text-gray-900`}
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
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 ml-10">{navLinks}</div>
          </div>
          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative text-gray-500 hover:text-gray-900"
            >
              <FaShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navLinks}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
