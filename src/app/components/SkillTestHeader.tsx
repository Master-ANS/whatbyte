"use client"
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';


const SkillTestHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rank, setRank] = useState<number>(1);
  const [percentile, setPercentile] = useState<number>(30);
  const [score, setScore] = useState<number>(10);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
     
    closeModal();
  };

  return (
    <div className="w-full max-w-2xl  bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src="/HTML5.png" alt="HTML5 Logo" width={50} height={40}/>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-1">Hyper Text Markup Language</h2>
            <p className="text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button 
          className="bg-blue-900 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded"
          onClick={openModal}
        >
          Update
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Update scores</h2>
    <Image src="/HTML5.png" alt="HTML5 Logo" width={40} height={40} />
  </div>

  <div className="space-y-6">
    
    <div className="flex items-center">
      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <span>1</span>
      </div>
      <label className="block flex-grow">
        <span className="text-gray-700 font-medium">Update your Rank</span>
        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
      </label>
    </div>

    
    <div className="flex items-center">
      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <span>2</span>
      </div>
      <label className="block flex-grow">
        <span className="text-gray-700 font-medium">Update your Percentile</span>
        <input
          type="number"
          value={percentile}
          onChange={(e) => setPercentile(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
      </label>
    </div>

    {/* Score Input */}
    <div className="flex items-center">
      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
        <span>3</span>
      </div>
      <label className="block flex-grow">
        <span className="text-gray-700 font-medium">Update your Current Score (out of 15)</span>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
      </label>
    </div>
  </div>

  <div className="flex justify-end space-x-4 mt-8">
    <button
      onClick={closeModal}
      className="px-6 py-2 border border-gray-300 rounded-md font-medium"
    >
      cancel
    </button>
    <button
      onClick={handleSave}
      className="px-6 py-2 bg-blue-900 text-white rounded-md font-medium flex items-center"
    >
      save
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 ml-2" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
    </button>
  </div>
</Modal>

    </div>
  );
};

export default SkillTestHeader;