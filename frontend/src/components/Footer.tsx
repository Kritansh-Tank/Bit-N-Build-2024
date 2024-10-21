import React, { useState } from 'react';
import { Leaf, Facebook, Twitter, Instagram, DollarSign } from 'lucide-react';

const Footer = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonateClick = () => {
    setShowDonateModal(true);
  };

  const handleCloseDonateModal = () => {
    setShowDonateModal(false);
  };

  return (
    <footer className="bg-green-800 text-white py-0 pt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 ml-6">
          <Leaf size={24} className="mr-2" />
          <span className="text-xl font-bold">EcoTravel</span>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-2 mr-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300"><Instagram /></a>
          </div>
          <button 
            onClick={handleDonateClick}
            className="flex items-center bg-green-600 hover:bg-green-700 transition duration-300 px-4 py-2 rounded mr-6"
            id="donate"
          >
            <DollarSign size={16} className="mr-2" />
            Donate to Environmental NGOs
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm">
        <p>&copy; 2024 EcoTravel. All rights reserved.</p>
        <p className="mt-1 mb-4">We are committed to sustainable travel and environmental conservation.</p>
      </div>

      {showDonateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white text-green-800 p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">Donate to Environmental NGOs</h3>
            <p className="mb-4">Your donation helps support various environmental conservation efforts around the world.</p>
            <div className="flex justify-between mb-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">$10</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">$25</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">$50</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">Custom</button>
            </div>
            <button 
              onClick={handleCloseDonateModal}
              className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;