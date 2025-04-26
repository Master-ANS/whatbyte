import Image from 'next/image';

interface ComparisonGraphParams{
    percentile : number
}

const ComparisonGraph = ({percentile} : ComparisonGraphParams) => {
  return (
    <div className= "bg-white rounded-lg shadow-sm p-6 mb-6 ">
      <h3 className="text-lg font-bold mb-4">Comparison Graph</h3>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold">You scored {percentile}% percentile</span> which is {percentile > 72 ? 'higher': percentile === 72 ? 'equal to' : 'lower'} than the 
          average percentile 72% of all the engineers who took this assessment
        </p>
      </div>
      <div className="flex justify-center items-center h-48 relative">
        <div className="w-full h-px bg-gray-200 absolute"></div>
        <div className="relative h-32 w-full">
          {/* This would be replaced with an actual graph component */}
          <Image src="/graph-placeholder.png" alt="Comparison Graph" layout="fill" objectFit="contain" />
          <div className="absolute bottom-0 left-1/4 text-sm text-gray-500">your percentile</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;