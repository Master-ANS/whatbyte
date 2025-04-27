import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import { Doughnut } from 'react-chartjs-2';
  
  ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
  );
  
  interface QuestionAnalysisProps {
    score: number;
  }
  
  const QuestionAnalysis = ({ score }: QuestionAnalysisProps) => {
    const data = {
       
       labels: ['Correct' , 'incorrect'],
      datasets: [{
        label: '',
        data: [score, 15 - score],
        backgroundColor: ['#3b82f6', '#bfdbfe'], 
        borderColor: ['#3b82f6', '#bfdbfe'],
        borderWidth: 2,
      }]
      
      
    };
  
    const options = {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true 
        }
      },
      cutout: '70%' 
    };
  
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Question Analysis</h3>
          <span className="text-blue-600 font-bold">{score}/15</span>
        </div>
        <p className="text-gray-700 mb-6">
          <span className="font-bold">You scored {score} question{score !== 1 && 's'} correct out of 15.</span> However it still needs some improvements.
        </p>

        <div className="flex justify-center items-center">
          <div className="w-60 h-60">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    );
  };
  
  export default QuestionAnalysis;
  