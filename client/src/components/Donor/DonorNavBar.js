
import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';

function DonorNavBar(props) {
  const handleAccountSettingsClick = () => {
    props.onAccountSettingsClick();
  };

  return (
    <nav className="rounded-lg">
      <div className="flex justify-center items-center px-4">
        <ul className="flex items-center space-x-4 flex-grow">
          {/* Navbar components */}
        </ul>
        <div className="p-4 mr-5">
          <p>
            Hello, {props.name}! Welcome to your dashboard! Here you can manage
            your account settings, view your donations, and more.
          </p>
        </div>
        <button
          className="py-2 px-4 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center shadow-md transition-colors duration-300"
          onClick={handleAccountSettingsClick}
        >
          <FaCog className="mr-2" />
          <span className="text-base">Settings</span>
        </button>
      </div>
    </nav>
  );
}

export default DonorNavBar;



