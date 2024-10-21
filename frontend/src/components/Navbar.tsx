import React, { useState } from "react";
import { Leaf } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-green-600 text-white p-4 sticky top-0 z-20 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf size={24} />
          <span className="text-xl font-bold md:text-2xl">EcoTravel</span>
        </div>
        <button onClick={toggleMobileMenu} className="md:hidden">
          <Menu size={24} />
        </button>
        <ul
          className={`flex flex-col space-y-4 ${
            showMobileMenu ? "block" : "hidden"
          } md:hidden`}
        >
          <li>
            <a
              href="#"
              className="hover:text-green-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#impact-calculator"
              className="hover:text-green-200 transition duration-300"
            >
              Calculate Impact
            </a>
          </li>
          <li>
            <a
              href="#accommodations"
              className="hover:text-green-200 transition duration-300"
            >
              Accommodations
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="hover:text-green-200 transition duration-300"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="#itineraries"
              className="hover:text-green-200 transition duration-300"
            >
              Green Travel Itineraries
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="hover:text-green-200 transition duration-300"
            >
              Donations
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#"
              className="hover:text-green-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#impact-calculator"
              className="hover:text-green-200 transition duration-300"
            >
              Calculate Impact
            </a>
          </li>
          <li>
            <a
              href="#accommodations"
              className="hover:text-green-200 transition duration-300"
            >
              Accommodations
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="hover:text-green-200 transition duration-300"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="#itineraries"
              className="hover:text-green-200 transition duration-300"
            >
              Green Travel Itineraries
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="hover:text-green-200 transition duration-300"
            >
              Donations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
