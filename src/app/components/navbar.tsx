import React from 'react';

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-sm bg-white gap-4 sm:gap-0">
      
     
      <div className="flex items-center text-2xl font-bold text-gray-800">
        <div className="bg-white p-1 rounded-md">
          <img
            src="logo2.png"
            alt="Company Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
        <span className="ml-2">WhatBytes</span>
      </div>

      
      <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-md">
        <img
          src="profilepic.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span className="text-gray-800 font-bold text-sm">Ayush Navneet Singh</span>
      </div>

    </nav>
  );
}

export default Navbar;
