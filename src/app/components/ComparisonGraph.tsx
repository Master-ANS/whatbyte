import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJs, 
  LineElement, 
  CategoryScale, 
  LinearScale, 
  PointElement,
  Tooltip,
  ChartEvent
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { ChartOptions } from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  annotationPlugin
);

interface ComparisonGraphParams {
  percentile: number;
}

const ComparisonGraph = ({ percentile }: ComparisonGraphParams) => {
  const data = {
    labels: [0, 5, 10, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    datasets: [{
      label: 'Percentile Distribution',
      data: [2, 3, 4, 7, 10, 15, 20, 20, 20, 30, 38, 45, 40, 30, 20, 15, 10, 8, 6, 7, 2, 1],
      backgroundColor: 'transparent',
      borderColor: 'rgba(132, 90, 223, 0.5)',
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(132, 90, 223, 0.5)',
      tension: 0.4,
      pointRadius: 3,
      fill: false,
    }]
  };

  const options: ChartOptions<'line'> = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: percentile,
            xMax: percentile,
            borderColor: 'grey',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              content: `Your percentile : ${percentile}%`,
              position: 'start',
              color: 'black',
              backgroundColor: 'white',
              font: {
                size: 12,
              },
              display: true
            },
            drawTime: 'afterDatasetsDraw',
            z: 100,
            enter: (context) => {
              const chart = context.chart;
              const ctx = chart.ctx;
              
              const x = context.element.x;
              const y = context.element.y / 2; 
              
              ctx.save();
              
              ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
              ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.roundRect(x - 60, y - 40, 120, 30, 5);
              ctx.fill();
              ctx.stroke();
              
              // Draw tooltip text
              ctx.fillStyle = 'black';
              ctx.textAlign = 'center';
              ctx.font = '12px Arial';
              ctx.fillText(`${percentile}th percentile`, x, y - 20);
              
              ctx.restore();
              
              chart.draw();
            },
            leave: (context) => {
              
              context.chart.draw();
            }
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Percentile'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Distribution'
        }
      },
    },
    onHover: (event: any, elements, chart) => {
      if (!chart || !chart.canvas) return;
      
      const nativeEvent = event.native as MouseEvent;
      if (!nativeEvent) return;
      
      const rect = chart.canvas.getBoundingClientRect();
      const x = nativeEvent.offsetX || (nativeEvent.clientX - rect.left);
      
      const xScale = chart.scales.x;
      const percentilePosition = xScale.getPixelForValue(percentile);
      
      if (Math.abs(x - percentilePosition) < 10) {
        chart.canvas.style.cursor = 'pointer';
      } else {
        chart.canvas.style.cursor = 'default';
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-lg font-bold mb-4">Comparison Graph</h3>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold">You scored {percentile}% percentile</span> which is {percentile > 72 ? 'higher' : percentile === 72 ? 'equal to' : 'lower'} than the average percentile 72% of all the engineers who took this assessment.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;