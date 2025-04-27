interface QuickStatisticsProps {
    rank: number;
    percentile: number;
    score: number;
  }
  
  const QuickStatistics = ({ rank, percentile, score }: QuickStatisticsProps) => {
    return (
      <div className=" bg-white rounded-lg shadow-sm p-4 mb-6">
        <h3 className="text-lg font-bold mb-2">Quick Statistics</h3>
        <div className="flex justify-between">
          
         
          <div className="flex items-center ">
            <div className="bg-yellow-50 p-3 rounded-full mr-4">
              <span className="text-yellow-500 text-xl">🏆</span>
            </div>
            <div>
              <h4 className="text-xl font-bold">{rank}</h4>
              <p className="text-gray-500 text-sm">YOUR RANK</p>
            </div>
          </div>
  
          
          <div className="flex items-center">
            <div className="bg-gray-50 p-3 rounded-full mr-4">
              <span className="text-gray-400 text-xl">📋</span>
            </div>
            <div>
              <h4 className="text-xl font-bold">{percentile}%</h4>
              <p className="text-gray-500 text-sm">PERCENTILE</p>
            </div>
          </div>
  
          
          <div className="flex items-center">
            <div className="bg-green-50 p-3 rounded-full mr-4">
              <span className="text-green-500 text-xl">✅</span>
            </div>
            <div>
              <h4 className="text-xl font-bold">{score} / 15</h4>
              <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default QuickStatistics;
  