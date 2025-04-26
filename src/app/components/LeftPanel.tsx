// components/leftPanel.tsx
import Image from 'next/image';

const LeftPanel = () => {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      
      <div className="flex flex-col flex-grow  p-2 space-y-2">
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
  );
};

export default LeftPanel;