const SyllabusAnalysis = () => {
    // Data for syllabus items
    const syllabusItems = [
      { name: "HTML Tools, Forms, History", percentage: 80, color: "blue" },
      { name: "Tags & References in HTML", percentage: 60, color: "orange" },
      { name: "Tables & References in HTML", percentage: 24, color: "red" },
      { name: "Tables & CSS Basics", percentage: 96, color: "green" }
    ];
  
    // Mapping of color to Tailwind classes
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
      green: "bg-green-500",
    };
  
    // Mapping of color to text color classes
    const textColorMap: { [key: string]: string } = {
      blue: "text-blue-500",
      orange: "text-orange-500",
      red: "text-red-500",
      green: "text-green-500",
    };
  
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold mb-6">Syllabus Wise Analysis</h3>
        <div className="space-y-6">
          {syllabusItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                {/* Item Name and Percentage */}
                <span className="text-gray-700">{item.name}</span>
                <span className={`font-bold ${textColorMap[item.color]}`}>{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                {/* Animated Progress Bar */}
                <div
                  className={`${colorMap[item.color]} h-2.5 rounded-full`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SyllabusAnalysis;
  