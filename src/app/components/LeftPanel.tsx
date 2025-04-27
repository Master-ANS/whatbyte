'use client';

import { useState } from 'react';
import Image from 'next/image';

const LeftPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <button 
        className="md:hidden fixed top-4  z-50 p-2 bg-blue-200 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 md:relative md:translate-x-0 md:flex`}
      >
        <div className="flex flex-col flex-grow p-2 space-y-2">
          
          <div className="flex items-center p-3 rounded-r-4xl cursor-pointer hover:bg-gray-100">
            <div className="w-5 h-10 mr-3 flex items-center justify-center">
              <span className="text-gray-700">📊</span>
            </div>
            <span className="text-gray-700 font-bold text-md">Dashboard</span>
          </div>

          <div className="flex items-center p-3 rounded-r-4xl cursor-pointer bg-blue-100">
            <div className="w-5 h-10 mr-3 flex items-center justify-center">
              <span className="text-blue-600">📝</span>
            </div>
            <span className="text-blue-600 font-bold text-md">Skill Test</span>
          </div>

          <div className="flex items-center p-3 rounded-r-4xl cursor-pointer hover:bg-gray-100">
            <div className="w-5 h-10 mr-3 flex items-center justify-center">
              <span className="text-gray-700">📁</span>
            </div>
            <span className="text-gray-700 font-bold text-md">Internship</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default LeftPanel;
